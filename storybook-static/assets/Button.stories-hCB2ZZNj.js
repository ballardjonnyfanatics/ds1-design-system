import{R as l}from"./index-DJO9vBfz.js";const t=({label:a,variant:d="primary",onClick:p})=>l.createElement("button",{className:`btn btn-${d}`,onClick:p},a);t.__docgenInfo={description:"",methods:[],displayName:"Button",props:{label:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const g={title:"Components/Button",component:t},u=a=>l.createElement(t,{...a}),e=u.bind({});e.args={label:"Primary Button",onClick:()=>alert("Clicked!")};const r=u.bind({});r.args={label:"Secondary Button",variant:"secondary",onClick:()=>alert("Clicked!")};var n,o,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:"args => <Button {...args} />",...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var i,c,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:"args => <Button {...args} />",...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const b=["Primary","Secondary"];export{e as Primary,r as Secondary,b as __namedExportsOrder,g as default};
