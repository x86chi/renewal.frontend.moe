---
title: '프런트엔드에서 의존성을 제어하는 법'
excerpt: '세상은 변합니다. 의존성과 평생을 약속하지 마세요. 의존성에 휘둘리지 말고, 의존성을 통제하세요'
date: '2022-06-12T11:30:30.616902'
author: 탐정토끼(Taehee Kim)
tag: '작성중, 의존성, TDD, 인터페이스'
---

## 의존할 수록 그 틀에서 벗어나기 힘들어집니다.

[우리에게는 프런트 테스트가 필요할지도 모릅니다](https://twinstae.github.io/why-frontend-testing/)에서 이야기했던 것처럼, 테스트는 단순히 에러를 잡기 위한 도구가 아닙니다. 한편으로 잘못 짠 테스트는 우리를 고통스럽게 만들기도 하죠. 특히 이런저런 의존성을 제대로 다루지 못하면 테스트는 힘들어집니다.

괜히 테스트 좀 짜보려다가 귀찮아지네요. 그냥 테스트만 안하면 되는 게 아닐까요? 슬프게도 테스트를 하지 않는다고 의존성이 사라지는 건 아닙니다. 테스트 하기 어려운 코드는 의존성 관리에 문제가 있다는 징조입니다.

여기서 Dependency 그러니까 의존성은 node_modules에 들어있는 라이브러리만 말하는 게 아닙니다. 보통 이런 의존성은 특정 플랫폼이나 라이브러리에는 존재하지만, 다른 플랫폼에는 없는 경우가 많습니다. 의존할 수록 의존성에서 벗어나기는 어려워집니다. 예를 들자면...

### 세상은 변하고 의존성은 망하고 사라지기도 합니다.

한 때는 서버 사이드 렌더링과 템플릿이 세상을 지배했습니다. 웹 개발자들은 지금도 JSP나 PHP를 쓰는 회사도 있지만. 자바 스프링 생태계는 [Thymeleaf](https://www.thymeleaf.org/) 같은 모던 템플릿 엔진으로 갈아타고 있습니다.

React는 나온지 10년도 되지 않았습니다. Angular, React, Vue 등 수 많은 SPA 프레임워크가 등장하면서 client side rendering이 대세가 되었습니다.

과연 10년 뒤에는 어떤 모습일까요? Svelte나 Solid 같은 건 안 쓸 거고, 리액트는 망하지 않을 거라고 생각하실지도 모르겠습니다.

하지만 Next.js나 Gatsby처럼 React에 기반한 새로운 프레임워크들은 어떤가요? CSR에는 장점도 있지만 여러 단점도 있었습니다. 검색엔진 최적화나 느린 초기 로딩 시간처럼 말이죠. 이 두 프레임워크는 역사와 전통이 있는 서버 사이드 렌더링(SSR)과 정적 사이트 생성(SSG)을 부활시키면서 많은 회사에 도입되고 있습니다. 얼마 전에는 Remix가 또 새롭게 등장했습니다.

### 버전이 올라가면서 전혀 다른 의존성이 되어버리기도 합니다.
몇 년 전만 해도 리액트는 클래스 컴포넌트로 가르치는 튜토리얼이 많았습니다. 하지만 이제 훅을 이용한 함수 컴포넌트가 주류가 되었습니다. 리액트 18이 나오면서 서스펜스나 concurrent 모드 같은 기능이 도입되고, 또 생태계는 변하고 있습니다.

Angular.js도 Angular로 이름을 바꾸고 타입스크립트와 RxJS 등이 도입되면서 큰 변화를 겪었습니다. 최근에는 Angular.js의 지원이 종료되고, EOL(End Of Life) 단계로 들어갔습니다.

Vue 생태계 역시 Vue2에서 Vue3로 올라가면서 Class와 비슷한 Option api에서 Hook과 비슷한 Composition API를 도입했습니다. 새로운 빌드 도구인 Vite, 유닛 테스트 도구인 Vitest, 상태 관리 라이브러리는 VueX에서 Pinia로 모든 것이 변했습니다.

이러한 '파괴적 변경(Breaking Change)'은 모두에게 고통스러운 일입니다. 잘 살고 있었는데 하루 아침에 다들 이사를 가버리고 집이 사라지는 기분이랄까요. 특히 IT세계는, 프런트엔드는 정말 빠르게 변하고 있습니다.

### 의존성으로 가득찬 코드는 옮겨가기 어렵습니다.

이렇게 세상이 변하면 이사(Migration)를 가야 합니다. 하지만 그게 생각만큼 쉽지 않습니다. 과연 예전에 짠 코드가 리팩토링한 뒤에도 똑같이 동작할까요? 처음부터 다시 만들자니 익숙해진 사용자들의 불만이 걱정입니다.

아, 우리에게는 테스트가 있었습니다. 테스트만 있다면 새로운 의존성으로 리팩토링하기는 쉽지 않을까요?

슬프게도 그렇지 않습니다. 많은 분들이 테스트를 [구현 상세에 의존](https://kentcdodds.com/blog/testing-implementation-details)해서 짜시곤 합니다. 예를 들어 버튼을 누르면 상태 관리의 상태가 기대하는대로 바뀌었는지 보는 테스트가 있다고 합시다. 이 테스트는 상태 관리 라이브러리가 변하면 바로 깨집니다. 또 Next 같은 SSR로 옮겨가면서 이런 상태관리 라이브러리가 필요 없어질 수도 있습니다.

결국 의존성을 바꾸면서 테스트도 다시 만들어야 합니다. react-router-dom과 Next router 는 테스트 방법도 다르니 또 문서를 보면서 삽질을 하겠지요.

자 그러면 이렇게 새로 만든 테스트가 정확한지는... 어떻게 믿을 수 있을까요?

## 다양한 의존성의 종류를 알아봅시다
그러면 일단 이러한 의존성에 무엇이 있는지부터 알아봅시다. 의존성은 정말 다양합니다. 보통 테스트하기 어려운 건 대부분 의존성입니다. 이건 자동화 테스트만 그런 게 아니고 수동 테스트를 할 때에도 어려운 것도 많습니다.

- 라우팅
  - react-router-dom, next router, vue router, 역사와 전통의 a tag
  - 다른 라우터를 쓰는 순간, 모든 router와 Link 컴포넌트를 바꿔줘야 합니다.
- API
  - HTTP나 GraphQL, gRPC, tRPC 같은 API 클라이언트들
    - test 할 때에는 실제 API를 사용할 수 없습니다.
    - 백엔드 API가 완성될 때까지 프런트엔드 개발자는 API와의 상호작용을 테스트할 수 없습니다. 
  - localStorage처럼 브라우저에만 존재하는 API. 
    - 서버 사이드 렌더링이나 node에서 돌아가는 테스트러너에는 존재하지 않습니다.
  - electron이나 tauri, capacitor 같이 데스크탑 앱이나 모바일 앱을 웹뷰에서 쓰게 해주는 API들
    - 웹 서비스를 데스크탑 애플리케이션으로 바꾸고 싶은 경우나, 웹 기술을 이용해서 앱을 만들고 싶을 때 귀찮아집니다.
  - 인터넷과 보안
    - 예를 들어 내부 IP는 같은 공유기 네트워크 안에서만 들어갈 수 있습니다.
    - CORS를 비롯한 보안 설정. 특히 소수만 권한을 가진 경우에는 돌려볼 수도 없습니다.
    - 인터넷 속도가 느린 경우나, 연결이 끊긴 경우, 의존하는 외부 서비스에 장애가 난 경우 등은 재현하기 어렵습니다.
- img, Image 태그
  - img 태그는 잘 작동하는 것처럼 보이지만, 화면 크기나 압축 포맷 등의 최적화를 생각하면 결국 잘 만든 image 컴포넌트를 쓰게 됩니다.
  - Next, Remix, Gatsby 등의 프레임워크는 자기들만의 방식으로 Image를 최적화한 컴포넌트를 제공합니다.
  - 이런 이미지 컴포넌트는 프레임워크의 환경에서만 작동하기 때문에 StoryBook이나 Jest 같은 테스트 환경에서는 귀찮은 세팅 방법을 또 알아야 합니다.
- 상태관리 라이브러리
  - redux, recoil, jotai, vuex, pinia ... 상태 관리 라이브러리는 많고 사용방법은 천차만별입니다. 어떤 라이브러리는 타입스크립트나 SSR을 잘 지원하지만 어떤 라이브러리는 그렇지 않습니다.
  - 팀의 상황에 따라 적합한 라이브러리가 다른데, 잘못 결정하면 나중에 이사 가기도 어렵습니다.
  - 이런 상태 관리 라이브러리도 그에 맞는 환경에서만 돌아가기 때문에, (이하 생략)
- 시간과 난수
  - Date.now()는 실행할 때마다 값이 달라집니다. 4월 이후에만 발생하는 에러는, 4월이 되기 전까지는 누구도 발견하지 못합니다. (실제 경험처럼 보인다면 착각이 아닙니다)
  - 무작위 난수는 어떤 난수가 나올지 누구도 모릅니다. 예를 들어 1부터 6까지 값이 나와야 하는 주사위 함수를 만들었는데, 실수로 0부터 5까지 숫자가 나오게 짯더라도. 여러 번 돌려서 0이 나오기 전까지는 에러가 있는지 모릅니다.
  - 특히 확률이 중요한 게임 업체 등에서는 이런 실수로 사용자들이 원하는 희귀 아이템이 나오지 않아서, 소송까지 가기도 합니다.

## 함수형에서 의존성 주입을 하면 안 되는 걸까?

함수형에서도 얼마든지 의존 관계를 역전할 수 있고요, 오히려 잘 할 수 있습니다.

### 의존 관계 역전과 의존성 주입
의존성 문제를 객체지향와 백엔드 생태계에서는 전부터 고민을 해왔습니다. 바로 의존성 주입과, 의존 관계의 역전입니다. 자바와 스프링을 해보셨다면 익숙할 이름이지만, 프런트엔드 생태계에서는 낯선 개념입니다.

의존 관계 역전(Dependency Inversion)은 우리 코드에서 먼저 인터페이스(Interface) 규격을 정의하고, 그 규격에 맞는 구현체(Implementation)를 만들어서 사용하는 겁니다. 이렇게 명세 조건에 맞는 구현체를 넣어주는 걸 의존성 주입(Dependency Injection)이라 합니다.

이렇게 하면 우리는 인터페이스 계약만 준수한다면, 어떤 구현체라도 갈아 끼울 수 있습니다. 우리 코드는 이러한 추상적인 인터페이스에 의존하지, 구체적인 의존성에 의존하지 않기 때문입니다. 우리가 인터페이스를 정의하고 소유하게 되고, 외부 의존성들은 우리가 만든 인터페이스에 맞추게 됩니다.

예를 들어 아이즈원 메일 목록을 가져오는 `IMailRepository` 인터페이스를 정의한다고 해봅시다. `getMailList`는 데이터 출처에서 mail 목록을 가져와서 반환합니다.

그러면 IMailRepository의 역할은 여러가지 방식으로 구현할 수 있습니다. LocalStorage에 저장된 메일 목록을 가져올 수도 있고요. IndexedDB로 구현할 수도 있습니다. 이러한 브라우저 API가 없다면 fetch를 이용해서 서버에서 데이터를 가져오게 할 수도 있습니다.

테스트할 때에는 내가 원하는 구현체를 선택할 수 있습니다. 되도록 테스트 환경에서 사용가능한 실제 의존성을 써도 되고요. 오래 걸리는 API 요청처럼 너무 느리거나,  설정하기가 어렵고 변덕스럽거나(외부 데이터나 날짜, 랜덤처럼), 일어나면 안 되는 일이라면! (결제나 이메일 발송처럼) Fake 구현체를 만들어서 주입해줄 수도 있습니다. 

- `IMailRepository` 인터페이스 (명세, 규격, 계약)
  - `FakeMailRepository` (의존성이 없는 테스트용 구현체)
  - `ServerMailRepository` (HTTP 서버)
  - `TauriFsMailRepository` (데스크탑 앱 환경)
  - `CapacitorFsMailRepository` (모바일 앱)

```typescript
// 인터페이스
export interface MailRepository {
  getAllMailList: () => Promise<RawMailT[]>;
  getMailBodyDict: () => Promise<Record<string, MailBodyT>>;
  getTagToMailDict: () => Promise<Record<string, string[]>>;
  getMemberNameDict: () => Promise<Record<string, number>>;
  saveTagToMailDict: (dict: Record<string, string[]>) => Promise<void>;
  status: () => Promise<{ [fileName: string]: boolean }>
}

// Fake 구현체
// import 로 가져온 json file을 그대로 반환합니다.
let tag_to_mail_dict: Record<string, string[]> = TAG_TO_MAIL_DICT;

export const fileList = ['pm_list.json', 'mail_body_dict.json', 'member_name.json'];

const fakeMailRepository: IMailRepository = {
  getAllMailList: async () => TEST_MAIL_LIST as RawMailT[],
  getMailBodyDict: async () => TEST_MAIL_BODY_DICT as Record<string, MailBodyT>,
  getTagToMailDict: async () => tag_to_mail_dict,
  getMemberNameDict: async () => MEMBER_NAME as Record<string, number>,
  saveTagToMailDict: async (dict: Record<string, string[]>) => {
    tag_to_mail_dict = dict;
  },
  status: async () => Object.fromEntries(fileList.map(fileName => [fileName, true]))
};
```

### 함수형에서는 의존성 주입을 어떻게 하나요?

그렇게 심오한 개념이 아닌데도 인터넷에는 잘못된 설명이 넘쳐납니다. 검색하면 자바와 스프링으로 된 복잡한 코드가 나와서 더 이해하기 어렵게 만듭니다. 이는 흔히 객체지향의 SOLID 원칙 중 하나로 소개하는데요. 다른 원칙들도 그렇지만 객체지향에만 한정된 방법은 아닙니다. 클래스나 데코레이터, 무슨무슨 프레임워크를 쓸 필요도 없어요.

그러면 함수의 인터페이스는 뭘까요? 바로 타입 서명(Type Signature) 입니다. 어떤 값을 받아서 어떤 값을 리턴하는지가 바로 함수의 인터페이스인 셈입니다.

외부 의존성은 대부분 순수하지 않습니다. 그래서 외부 의존성이 있는 부분을 분리하게 되면 순수 함수로 부수효과와 의존성 사이를 연결하면서 특정 프레임워크에 의존하지 않는 코드를 짤 수 있습니다.

다음 코드 예시를 봐주시죠. 코드의 구체적인 로직보다는 모양만 봐주셔도 충분합니다.

```typescript
// before: jotai 의존성이 로직과 뒤섞인 코드
const mailToTagDictAtom = atom((get) => {
  const tagToMailDict = get(tagToMailDictAtom);

  return Object.entries(tagToMailDict).reduce((acc, entry) => {
    (entry[1] ?? []).forEach(mailId => {
      const oldTags = acc.get(mailId) ?? [];
      oldTags.push(entry[0]);
      acc.set(mailId, oldTags);
    });
    return acc;
  }, new Map());
});

// after 의존성 없는 js 순수 함수와 jotai가 분리된 코드

// 순수 함수
function reverseTagToMail(tagToMailDict: Record<string, string[]>): Map<string, string[]> {
  return Object.entries(tagToMailDict).reduce((acc, entry) => {
    (entry[1] ?? []).forEach(mailId => {
      const oldTags = acc.get(mailId) ?? [];
      oldTags.push(entry[0]);
      acc.set(mailId, oldTags);
    });
    return acc;
  }, new Map());
}

// jotai 의존성으로 tagToMailDictAtom에서 가져온 tagToMailDict를 주입
const mailToTagDictAtom = atom((get) => {
  const tagToMailDict = get(tagToMailDictAtom);

  return reverseTagToMail(tagToMailDict);
});
```

특정 라이브러리에 의존하는 커스텀 hook은 testing-libary 같은 도구를 쓰거나, 컴포넌트와 함께 렌더링해야 테스트할 수 있습니다. 프레임워크나 라이브러리마다 독특한 테스팅 방법을 배워야 하는 거죠. 그리고 `tagToMailDictAtom`에 어떤 값이 들어 있는지에 따라 결과가 달라지고요. 이런 값들을 세팅해주기는 귀찮습니다.

하지만 후자는 어떤가요? jotai 상태 관리 라이브러리를 잘 모르시더라도 의존성 없이 js로 만든 순수 함수는 누구나 테스트할 수 있습니다. `reverseTagToMail` 함수는 tagToMailDict 값을 인자로 받기를 요구하고, tag를 가진 mail 목록을 가진 객체를, mail에 어떤 태그가 달려 있는지 담고 있는 Map으로 만들어서 반환할 것을 약속합니다. 같은 값을 넣으면 항상 같은 값을 반환하고, 간단한 테스트 데이터를 만들어서 넘겨볼 수도 있습니다.

무엇보다 나중에 jotai가 아니라 react-query나 recoil, redux 같은 다른 라이브러리로 옮겨가더라도 useSelector 같은 훅으로 state를 가져와서 `reverseTagToMail` 함수에 넘겨주기만 하면 됩니다. `reverseTagToMail` 함수는 jotai나 redux에 의존하지 않고, 오히려 이런 라이브러리가 저희의 순수 함수의 인터페이스에 맞춰서 값을 제공하고 있는 것이죠.

## 다음에 계속.

이번에는 의존성에게 휘둘리면 왜 테스트도 개발도 어려워지는지 이야기했습니다. 특히 세상은 변하고 의존성도 변하고 사라지기 때문에, 구현체에 의존하는 코드는 고통스러워진다고도 했습니다.

인터페이스 명세를 만들고 그에 맞는 다양한 구현체를 만들어서 선택하는 의존 관계 역전, 의존성 주입 방식은 테스트에도 도움이 되지만. 유연한 아키텍처를 쉽게 만들 수 있게 해줍니다. 의존성과 상관 없이 복잡한 핵심 로직이 기대한대로 돌아가는 걸 보장할 수 있습니다.

하지만 이게 끝은 아닙니다. 원래 저는 테스트와 함께 의존성 주입의 다양한 방법들을 소개하려고 이 글을 쓰기 시작했는데요. 의존성이 왜 고통스럽고, 왜 의존성을 진지하게 다뤄야 하는지 이야기만 했는데... 이미 글이 너무 길어졌습니다.

다음에는 클래스 없이도 의존성을 주입하는 프런트엔드의 다양한 방법들을 살펴봅니다. 인터넷에 의존성 주입을 치면 Java의 setter 주입과 생성자 주입만 주구장창 나옵니다만... 모던 프런트엔드에도 많은 방법들이 있고요. 사실 일부는 이미 다들 쓰고 계시기도 합니다. 예를 들어 Provider는 전역 상태 관리 도구가 아니라 의존성 주입 도구로 이해할 때 더 잘 사용할 수 있다는 걸 알게 되실 거에요. 매개변수가 아닌 Context로 값을 주입하는 게 순수함을 망가트리지 않으며, 오히려 편리하면서도 함수형스러운 코드를 짤 수 있게 도와준다는 이야기도 드리겠습니다.

> 다음에 계속...
