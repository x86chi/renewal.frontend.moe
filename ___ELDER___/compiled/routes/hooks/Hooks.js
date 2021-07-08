'use strict';

var index = require('../../index-73048756.js');
var components_HookDetail = require('../../components/HookDetail.js');

/* src/routes/hooks/Hooks.svelte generated by Svelte v3.38.3 */

const css = {
	code: "a.svelte-bvr7j8{margin-bottom:1rem;display:inline-block}",
	map: "{\"version\":3,\"file\":\"Hooks.svelte\",\"sources\":[\"Hooks.svelte\"],\"sourcesContent\":[\"<script>\\n  import HookDetail from '../../components/HookDetail.svelte';\\n\\n  export let data;\\n  export let request;\\n</script>\\n\\n<style>\\n  a {\\n    margin-bottom: 1rem;\\n    display: inline-block;\\n  }\\n</style>\\n\\n<svelte:head>\\n  <title>{data.hook.hook} Hook Interface: Elder.js Example Project</title>\\n  <meta name=\\\"description\\\" content=\\\"Hook details for {data.hook.hook} in Elder.js from the Hook Interface\\\" />\\n  <link href={request.permalink} rel=\\\"canonical\\\" />\\n</svelte:head>\\n\\n<a href=\\\"/\\\">&LeftArrow; Home</a>\\n\\n<h1>Elder.js Hook: {data.hook.hook}</h1>\\n\\n<HookDetail {...data} />\\n\\n<img\\n  src=\\\"https://elderguide.com/images/elderjs-hooks-v100.png\\\"\\n  alt=\\\"Elder.js hook Lifecycle\\\"\\n  style=\\\"max-width:100%; margin:1rem 0;\\\" />\\n\"],\"names\":[],\"mappings\":\"AAQE,CAAC,cAAC,CAAC,AACD,aAAa,CAAE,IAAI,CACnB,OAAO,CAAE,YAAY,AACvB,CAAC\"}"
};

const Hooks = index.create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { data } = $$props;
	let { request } = $$props;
	if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
	if ($$props.request === void 0 && $$bindings.request && request !== void 0) $$bindings.request(request);
	$$result.css.add(css);

	return `${($$result.head += `${($$result.title = `<title>${index.escape(data.hook.hook)} Hook Interface: Elder.js Example Project</title>`, "")}<meta name="${"description"}" content="${"Hook details for " + index.escape(data.hook.hook) + " in Elder.js from the Hook Interface"}" data-svelte="svelte-15cw1uv"><link${index.add_attribute("href", request.permalink, 0)} rel="${"canonical"}" data-svelte="svelte-15cw1uv">`, "")}

<a href="${"/"}" class="${"svelte-bvr7j8"}">← Home</a>

<h1>Elder.js Hook: ${index.escape(data.hook.hook)}</h1>

${index.validate_component(components_HookDetail, "HookDetail").$$render($$result, Object.assign(data), {}, {})}

<img src="${"https://elderguide.com/images/elderjs-hooks-v100.png"}" alt="${"Elder.js hook Lifecycle"}" style="${"max-width:100%; margin:1rem 0;"}">`;
});

module.exports = Hooks;
module.exports._css = "a.svelte-bvr7j8{margin-bottom:1rem;display:inline-block}.list.svelte-azdmmt.svelte-azdmmt{display:block;margin-bottom:0.5rem;font-size:13px}.list.svelte-azdmmt .code.svelte-azdmmt{cursor:help}.hook.svelte-azdmmt.svelte-azdmmt{max-width:100%;text-overflow:wrap;padding:1rem;border:1px solid #ddd;border-collapse:collapse;margin-bottom:1rem;border-radius:1rem;position:relative;background:white}.hook-number.svelte-azdmmt.svelte-azdmmt{position:absolute;top:0;right:0px;width:2rem;height:1.75rem;border-top-right-radius:1rem;border-bottom-left-radius:1rem;text-align:center;padding-top:3px;background:#ddd;font-size:14px}.overview.svelte-azdmmt.svelte-azdmmt{margin-right:1rem}@media(min-width: 768px){.hook.svelte-azdmmt.svelte-azdmmt:nth-child(even){margin-left:0.5rem}.hook.svelte-azdmmt.svelte-azdmmt:nth-child(odd){margin-right:0.5rem}}.use.svelte-azdmmt.svelte-azdmmt{font-size:14px}.use ul{padding-left:1rem}.overview.svelte-azdmmt.svelte-azdmmt{margin-bottom:0.75rem;padding-bottom:0.75rem;border-bottom:1px solid #ddd}";
module.exports._cssMap = "\u002F*# sourceMappingURL=data:application\u002Fjson;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yb3V0ZXMvaG9va3MvSG9va3Muc3ZlbHRlIiwiLi4vc3JjL3NyYy9zcmMvY29tcG9uZW50cy9Ib29rRGV0YWlsLnN2ZWx0ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRRyxnQkFBRSxjQUNjLEtBQ2YsUUFBUyxhQ0hOLGtDQUFFLFFBQ0ksTUFDVCxjQUFlLE9BQ2YsVUFBVyxLQUdGLHdDQUFFLE9BQ0gsS0FHTCxrQ0FBRSxVQUNNLEtBQ1gsY0FBZSxLQUNmLFFBQVMsS0FDVCxPQUFRLElBQUksTUFBTSxLQUNsQixnQkFBaUIsU0FDakIsY0FBZSxLQUNmLGNBQWUsS0FDZixTQUFVLFNBQ1YsV0FBWSxNQUdGLHlDQUFFLFNBQ0YsU0FDVixJQUFLLEVBQ0wsTUFBTyxJQUNQLE1BQU8sS0FDUCxPQUFRLFFBQ1Isd0JBQXlCLEtBQ3pCLDBCQUEyQixLQUMzQixXQUFZLE9BQ1osWUFBYSxJQUNiLFdBQVksS0FDWixVQUFXLEtBR0osc0NBQUUsYUFDSyxLQUdRLHlCQUNGLGtEQUFHLFlBQ1IsT0FFSSxpREFBRyxhQUNOLFFBSWQsaUNBQUUsVUFDTyxLQUNaLFFBQ2lCLGFBQ0YsS0FHUCxzQ0FBRSxjQUNNLFFBQ2YsZUFBZ0IsUUFDaEIsY0FBZSxJQUFJLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuICBpbXBvcnQgSG9va0RldGFpbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0hvb2tEZXRhaWwuc3ZlbHRlJztcblxuICBleHBvcnQgbGV0IGRhdGE7XG4gIGV4cG9ydCBsZXQgcmVxdWVzdDtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gIGEge1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG48L3N0eWxlPlxuXG48c3ZlbHRlOmhlYWQ+XG4gIDx0aXRsZT57ZGF0YS5ob29rLmhvb2t9IEhvb2sgSW50ZXJmYWNlOiBFbGRlci5qcyBFeGFtcGxlIFByb2plY3Q8L3RpdGxlPlxuICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiSG9vayBkZXRhaWxzIGZvciB7ZGF0YS5ob29rLmhvb2t9IGluIEVsZGVyLmpzIGZyb20gdGhlIEhvb2sgSW50ZXJmYWNlXCIgLz5cbiAgPGxpbmsgaHJlZj17cmVxdWVzdC5wZXJtYWxpbmt9IHJlbD1cImNhbm9uaWNhbFwiIC8+XG48L3N2ZWx0ZTpoZWFkPlxuXG48YSBocmVmPVwiL1wiPiZMZWZ0QXJyb3c7IEhvbWU8L2E+XG5cbjxoMT5FbGRlci5qcyBIb29rOiB7ZGF0YS5ob29rLmhvb2t9PC9oMT5cblxuPEhvb2tEZXRhaWwgey4uLmRhdGF9IC8+XG5cbjxpbWdcbiAgc3JjPVwiaHR0cHM6Ly9lbGRlcmd1aWRlLmNvbS9pbWFnZXMvZWxkZXJqcy1ob29rcy12MTAwLnBuZ1wiXG4gIGFsdD1cIkVsZGVyLmpzIGhvb2sgTGlmZWN5Y2xlXCJcbiAgc3R5bGU9XCJtYXgtd2lkdGg6MTAwJTsgbWFyZ2luOjFyZW0gMDtcIiAvPlxuIiwiPHNjcmlwdD5cbiAgZXhwb3J0IGxldCBob29rO1xuICBleHBvcnQgbGV0IGk7XG4gIGV4cG9ydCBsZXQgaG9va0VudGl0eURlZmluaXRpb25zO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgLmxpc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gIH1cblxuICAubGlzdCAuY29kZSB7XG4gICAgY3Vyc29yOiBoZWxwO1xuICB9XG5cbiAgLmhvb2sge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB0ZXh0LW92ZXJmbG93OiB3cmFwO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gIH1cblxuICAuaG9vay1udW1iZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDBweDtcbiAgICB3aWR0aDogMnJlbTtcbiAgICBoZWlnaHQ6IDEuNzVyZW07XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDFyZW07XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDNweDtcbiAgICBiYWNrZ3JvdW5kOiAjZGRkO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuXG4gIC5vdmVydmlldyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgLmhvb2s6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gICAgfVxuICAgIC5ob29rOm50aC1jaGlsZChvZGQpIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICAgIH1cbiAgfVxuXG4gIC51c2Uge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICA6Z2xvYmFsKC51c2UgdWwpIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gIH1cblxuICAub3ZlcnZpZXcge1xuICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDAuNzVyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gIH1cbjwvc3R5bGU+XG5cbjxkaXYgY2xhc3M9XCJob29rXCI+XG4gIHsjaWYgaSB8fCBpID09PSAwfTxzcGFuIGNsYXNzPVwiaG9vay1udW1iZXJcIj57aSArIDF9Ljwvc3Bhbj57L2lmfVxuXG4gIDxkaXYgY2xhc3M9XCJvdmVydmlld1wiPlxuICAgIDxzcGFuIGNsYXNzPVwiaG9vay1uYW1lXCI+XG4gICAgICB7I2lmIGhvb2subGluayAmJiBob29rLmxpbmsubGVuZ3RoID4gMH08YSBocmVmPXtob29rLmxpbmt9Pntob29rLmhvb2t9PC9hPns6ZWxzZX17aG9vay5ob29rfXsvaWZ9XG4gICAgPC9zcGFuPlxuICAgIDoge2hvb2suY29udGV4dH1cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJ1c2VcIj5cbiAgICB7QGh0bWwgaG9vay51c2V9XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJsaXN0XCI+XG4gICAgPHN0cm9uZz5Qcm9wczwvc3Ryb25nPiA6IHsjZWFjaCBob29rLnByb3BzIGFzIHByb3B9XG4gICAgICA8ZGl2IGNsYXNzPVwiY29kZVwiIGRhdGEtYmFsbG9vbi1sZW5ndGg9XCJtZWRpdW1cIiBkYXRhLWJhbGxvb24tcG9zPVwidXBcIiBhcmlhLWxhYmVsPXtob29rRW50aXR5RGVmaW5pdGlvbnNbcHJvcF19PlxuICAgICAgICB7cHJvcH1cbiAgICAgIDwvZGl2PlxuICAgIHsvZWFjaH1cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJsaXN0XCI+XG4gICAgPHN0cm9uZz5NdXRhYmxlPC9zdHJvbmc+IDogeyNlYWNoIGhvb2subXV0YWJsZSBhcyBtdXRhYmxlfVxuICAgICAgPGRpdiBjbGFzcz1cImNvZGVcIiBkYXRhLWJhbGxvb24tbGVuZ3RoPVwibWVkaXVtXCIgZGF0YS1iYWxsb29uLXBvcz1cInVwXCIgYXJpYS1sYWJlbD17aG9va0VudGl0eURlZmluaXRpb25zW211dGFibGVdfT5cbiAgICAgICAge211dGFibGV9XG4gICAgICA8L2Rpdj5cbiAgICB7L2VhY2h9XG4gIDwvZGl2PlxuXG4gIHsjaWYgaG9vay5hZHZhbmNlZH1cbiAgICA8ZGl2PjxzbWFsbD5UaGlzIGhvb2sgaXMgYW4gJ2FkdmFuY2VkJyBob29rIG1lYW5pbmcgaXQgZ2VhcmVkIHRvd2FyZHMgYWR2YW5jZWQgdXNlcnMgb3IgcGx1Z2lucy48L3NtYWxsPjwvZGl2PlxuICB7L2lmfVxuXG4gIDxzbWFsbD57aG9vay5leHBpcmVtZW50YWwgPyAnRXhwaXJlbWVudGFsJyA6ICdTdGFibGUnfSAmbWlkZG90OyBMb2NhdGlvbjoge2hvb2subG9jYXRpb259PC9zbWFsbD5cbjwvZGl2PlxuIl19 *\u002F";
module.exports._cssIncluded = ["src/routes/hooks/Hooks.svelte","src/components/HookDetail.svelte"]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9va3MuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvaG9va3MvSG9va3Muc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gIGltcG9ydCBIb29rRGV0YWlsIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSG9va0RldGFpbC5zdmVsdGUnO1xuXG4gIGV4cG9ydCBsZXQgZGF0YTtcbiAgZXhwb3J0IGxldCByZXF1ZXN0O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgYSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbjwvc3R5bGU+XG5cbjxzdmVsdGU6aGVhZD5cbiAgPHRpdGxlPntkYXRhLmhvb2suaG9va30gSG9vayBJbnRlcmZhY2U6IEVsZGVyLmpzIEV4YW1wbGUgUHJvamVjdDwvdGl0bGU+XG4gIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJIb29rIGRldGFpbHMgZm9yIHtkYXRhLmhvb2suaG9va30gaW4gRWxkZXIuanMgZnJvbSB0aGUgSG9vayBJbnRlcmZhY2VcIiAvPlxuICA8bGluayBocmVmPXtyZXF1ZXN0LnBlcm1hbGlua30gcmVsPVwiY2Fub25pY2FsXCIgLz5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxhIGhyZWY9XCIvXCI+JkxlZnRBcnJvdzsgSG9tZTwvYT5cblxuPGgxPkVsZGVyLmpzIEhvb2s6IHtkYXRhLmhvb2suaG9va308L2gxPlxuXG48SG9va0RldGFpbCB7Li4uZGF0YX0gLz5cblxuPGltZ1xuICBzcmM9XCJodHRwczovL2VsZGVyZ3VpZGUuY29tL2ltYWdlcy9lbGRlcmpzLWhvb2tzLXYxMDAucG5nXCJcbiAgYWx0PVwiRWxkZXIuanMgaG9vayBMaWZlY3ljbGVcIlxuICBzdHlsZT1cIm1heC13aWR0aDoxMDAlOyBtYXJnaW46MXJlbSAwO1wiIC8+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztPQUdhLElBQUk7T0FDSixPQUFPOzs7Ozt5RUFXVixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksc0lBQzhCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSw2R0FDdEQsT0FBTyxDQUFDLFNBQVM7Ozs7a0NBS1gsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJOztpR0FFbEIsSUFBSTs7Ozs7OzsifQ==
