"use strict";
exports.id = 691;
exports.ids = [691];
exports.modules = {

/***/ 9903:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Head: () => (/* binding */ Head),
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(7076);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.esm.js + 16 modules
var emotion_react_esm = __webpack_require__(3240);
;// CONCATENATED MODULE: ./src/components/ProfilePicture.tsx
const ProfilePicture=()=>{const data=(0,gatsby_browser_entry.useStaticQuery)(getProfilePicture);return (0,emotion_react_esm/* jsx */.tZ)("section",{className:"ProfilePicture"},(0,emotion_react_esm/* jsx */.tZ)("img",{alt:"My picture!",src:data.allImageSharp.edges[0].node.fluid.srcWebp}));};const getProfilePicture="268385736";/* harmony default export */ const components_ProfilePicture = (ProfilePicture);
// EXTERNAL MODULE: ./node_modules/@fortawesome/react-fontawesome/index.es.js + 1 modules
var index_es = __webpack_require__(982);
// EXTERNAL MODULE: ./node_modules/@fortawesome/free-solid-svg-icons/index.mjs
var free_solid_svg_icons = __webpack_require__(9417);
// EXTERNAL MODULE: ./node_modules/@fortawesome/free-brands-svg-icons/index.mjs
var free_brands_svg_icons = __webpack_require__(3024);
;// CONCATENATED MODULE: ./src/data/contacts.json
const contacts_namespaceObject = JSON.parse('{"J":[{"description":"alv.barrosc@hotmail.com","link":"mailto:alv.barrosc@hotmail.com","icon":"faEnvelope"},{"description":"in/alv-barros-c/","link":"https://linkedin.com/in/alv-barros-c/","icon":"faLinkedin"},{"description":"AlvBarros","link":"https://github.com/AlvBarros","icon":"faGithub"},{"description":"AlvBarros","link":"https://dev.to/AlvBarros","icon":"faDev"}]}');
;// CONCATENATED MODULE: ./src/components/ContactLinks.tsx
const contactLinks=contacts_namespaceObject.J;function iconToComponent(iconName){var _faEnvelope$faGithub$;return(_faEnvelope$faGithub$={faEnvelope:free_solid_svg_icons/* faEnvelope */.FU$,faGithub:free_brands_svg_icons/* faGithub */.zhw,faLinkedin:free_brands_svg_icons/* faLinkedin */.D9H,faDev:free_brands_svg_icons/* faDev */.zOJ}[iconName])!==null&&_faEnvelope$faGithub$!==void 0?_faEnvelope$faGithub$:free_solid_svg_icons/* faBug */.QLU;}const ContactLinks=()=>{function redirect(link){window.location.href=link;}const icon="faGithub";return (0,emotion_react_esm/* jsx */.tZ)("section",{className:"ContactLinks"},(0,emotion_react_esm/* jsx */.tZ)("ul",null,contactLinks.map(contact=>{return (0,emotion_react_esm/* jsx */.tZ)("li",{key:contact.icon},(0,emotion_react_esm/* jsx */.tZ)(index_es/* FontAwesomeIcon */.G,{icon:iconToComponent(contact.icon),onClick:()=>redirect(contact.link)}),(0,emotion_react_esm/* jsx */.tZ)("span",{onClick:()=>redirect(contact.link)}," ",contact.description," "));})));};/* harmony default export */ const components_ContactLinks = (ContactLinks);
;// CONCATENATED MODULE: ./src/components/Clock.tsx
const Clock=()=>{const comparativeOffset=3;const currentOffset=new Date().getTimezoneOffset()/60;const time=comparativeOffset-currentOffset;return (0,emotion_react_esm/* jsx */.tZ)("section",{className:"clock"},time!=0&&(0,emotion_react_esm/* jsx */.tZ)("p",null,"I am ",(0,emotion_react_esm/* jsx */.tZ)("br",null),(0,emotion_react_esm/* jsx */.tZ)("strong",null,Math.abs(time)," hours",comparativeOffset>currentOffset?" behind":" ahead of"),(0,emotion_react_esm/* jsx */.tZ)("br",null),"you!"));};/* harmony default export */ const components_Clock = (Clock);
;// CONCATENATED MODULE: ./src/components/Introduction.tsx
const Introduction=()=>{return (0,emotion_react_esm/* jsx */.tZ)("section",{className:"Introduction"},(0,emotion_react_esm/* jsx */.tZ)("h1",null,"Alvaro Barros"),(0,emotion_react_esm/* jsx */.tZ)("h3",null,(0,emotion_react_esm/* jsx */.tZ)("strong",null,"Senior")," Fullstack Software Engineer"),(0,emotion_react_esm/* jsx */.tZ)("p",null,"Node.js | Nest | React | Angular | Flutter | Swift"));};/* harmony default export */ const components_Introduction = (Introduction);
// EXTERNAL MODULE: external "/Users/alvarobarros/Projects/alvbarros.github.io/node_modules/react/index.js"
var index_js_ = __webpack_require__(1785);
;// CONCATENATED MODULE: ./src/data/experience.json
const experience_namespaceObject = JSON.parse('{"l":[{"jobTitle":"IT Architect","companyName":"Santander Bank","companyLink":"http://santander.com/","timeWorked":{"from":"AUGUST/2019","to":"CURRENTLY"},"jobDescription":"I lead the development of many features inside the main app for Santander\'s Brazilian employees. Later, I would join the Frontend Architecture team to work on various SDKs and internal tooling - such as Networking, Cryptography, Analytics - to help development of other apps.","jobDetails":["First experience at a leadership position","Worked primarily on Hybrid applications","Main stack: Angular, Flutter, Java Spring, Azure, AWS"]},{"jobTitle":"Fullstack Developer","companyName":"iRestify","companyLink":"https://irestify.com/","timeWorked":{"from":"APRIl/2022","to":"FEBRUARY/2023"},"jobDescription":"At iRestify, I would work on the Admin platform, on the billing flow and integration with Stripe API. This would automate the creation of bills for their clients and update our databases.","jobDetails":["First experience at a international position","Main stack: Nest.js, React, React Native, AWS"]},{"jobTitle":"Senior Software Engineer","companyName":"Vector Software","companyLink":"https://www.linkedin.com/company/vector-itc/","timeWorked":{"from":"JANUARY/2019","to":"AUGUST/2019"},"jobDescription":"I was hired initially as a third-party Senior developer and would work primarily for Santander, before being hired as a Tech Lead for the app mentioned above. At this time, however, I would join different projects to provide assitance to either hit deadlines and deliver in time.","jobDetails":["There were many times where I would join a project only for one or two sprints, assist the team in what was needed, and leave","Main stack: Node.js with Express, React, Angular, jQuery, Microsoft SQL Server"]},{"jobTitle":"Associate Software Engineer","companyName":"Avanade IT Solutions","companyLink":"https://www.avanade.com/","timeWorked":{"from":"APRIL/2018","to":"JANUARY/2019"},"jobDescription":"I was a developer for internal tooling inside a health insurance company, Qualicorp, and Albert Einstein Hospital, in São Paulo. This was my first experience with Azure Cloud development and DevOps","jobDetails":["At this time, I would be responsible for Azure deployment and infrastructure in the development and staging development","Main stack: .NET Core, Angular, Azure, Microsoft SQL Server"]},{"jobTitle":"Software Development Intern","companyName":"Resource Solutions (Now Qintess)","companyLink":"https://www.qintess.com","timeWorked":{"from":"APRIL/2017","to":"APRIL/2018"},"jobDescription":"This was my first job as a Software Developer, previous to this I was only doing side-projects and freelance. At this time, I had my first contact with Agile methodology, Kanbans, etc. I would work on a website for Itaú Unibanco, Movidas landing page, CPFL admin backoffice, and some other projects.","jobDetails":["Main stack: ASP.NET 5, jQuery, Node.js, MySQL"]}],"I":{"publications":[{"title":"Bidimensional Image Processing Solution for Measuring Human Body Parts","summary":"The present work aims to present a study on visual recognition techniques, based on object detection techniques that are capable of recognizing, delimiting, segmenting and measuring the human foot. The experiments were carried out in the TensorFlow environment in conjunction with the MS-COCO model. It is expected that the results of this application can be used in e-commerce applications such as virtual fitting rooms for the footwear industry and other applications that may arise.","link":"https://ocs.ifsp.edu.br/conict/xconict/paper/download/5853/1541","for":"10th IFSP Innovation, Science and Technology Congress (CONICT)","when":"2019"}],"degrees":[{"courseTitle":"System Development and Analysis","college":"Federal Institute of Education, Science and Technology of São Paulo (IFSP)","collegeLink":"https://www.ifsp.edu.br/","finished":"2020"}]}}');
;// CONCATENATED MODULE: ./src/components/Divider.tsx
const Divider=()=>{return (0,emotion_react_esm/* jsx */.tZ)("div",{className:"divider"});};
;// CONCATENATED MODULE: ./src/components/Experience.tsx
const professionalExperiences=experience_namespaceObject.l;const academicExperiences=experience_namespaceObject.I;function renderProfessionalExperience(exp,index){return (0,emotion_react_esm/* jsx */.tZ)("li",{key:index,className:"experience professional"},(0,emotion_react_esm/* jsx */.tZ)("h3",null,exp.jobTitle," ")," @"," ",(0,emotion_react_esm/* jsx */.tZ)("a",{className:"companyName",href:exp.companyLink},exp.companyName),(0,emotion_react_esm/* jsx */.tZ)("div",{className:"time"},(0,emotion_react_esm/* jsx */.tZ)("span",{className:"from"},exp.timeWorked.from.toString())," -"," ",(0,emotion_react_esm/* jsx */.tZ)("span",{className:"from"},exp.timeWorked.to.toString())),(0,emotion_react_esm/* jsx */.tZ)("div",{className:"description"},(0,emotion_react_esm/* jsx */.tZ)("p",null," ",exp.jobDescription," "),(0,emotion_react_esm/* jsx */.tZ)("ul",null,exp.jobDetails.map((detail,index)=>{return (0,emotion_react_esm/* jsx */.tZ)("li",{key:index},detail);}))));}function renderAcademicExperience(degree,index){return (0,emotion_react_esm/* jsx */.tZ)("li",{key:index,className:"experience academic degree"},(0,emotion_react_esm/* jsx */.tZ)("h3",null,degree.courseTitle," "),(0,emotion_react_esm/* jsx */.tZ)("a",{className:"collegeName",href:degree.collegeLink},degree.college)," ","- ",(0,emotion_react_esm/* jsx */.tZ)("span",{className:"from"},degree.finished));}function renderAcademicPublications(publication,index){return (0,emotion_react_esm/* jsx */.tZ)("li",{key:index,className:"experience academic degree"},(0,emotion_react_esm/* jsx */.tZ)("h3",null,publication.title," "),(0,emotion_react_esm/* jsx */.tZ)("a",{className:"collegeName",href:publication.link},publication.for)," ","- ",(0,emotion_react_esm/* jsx */.tZ)("span",{className:"when"},publication.when),(0,emotion_react_esm/* jsx */.tZ)("div",{className:"description"},(0,emotion_react_esm/* jsx */.tZ)("p",null," ",publication.summary," ")));}const Experiences=()=>{const{0:showsMore,1:setShowMore}=(0,index_js_.useState)(false);function toggleShowMore(){setShowMore(!showsMore);}return (0,emotion_react_esm/* jsx */.tZ)("section",{className:"Experience"},(0,emotion_react_esm/* jsx */.tZ)("h1",null," Professional experience "),(0,emotion_react_esm/* jsx */.tZ)("ul",null,professionalExperiences.slice(0,2).map(renderProfessionalExperience),showsMore&&professionalExperiences.slice(2).map(renderProfessionalExperience)),(0,emotion_react_esm/* jsx */.tZ)("span",{onClick:toggleShowMore,className:"showMore"},showsMore?"Show less":"Show more"),(0,emotion_react_esm/* jsx */.tZ)(Divider,null),(0,emotion_react_esm/* jsx */.tZ)("h1",null," Academic publications "),(0,emotion_react_esm/* jsx */.tZ)("ul",null,academicExperiences.publications.map(renderAcademicPublications)),(0,emotion_react_esm/* jsx */.tZ)(Divider,null),(0,emotion_react_esm/* jsx */.tZ)("h1",null," Academic experience "),(0,emotion_react_esm/* jsx */.tZ)("ul",null,academicExperiences.degrees.map(renderAcademicExperience)));};/* harmony default export */ const Experience = (Experiences);
;// CONCATENATED MODULE: ./src/pages/index.tsx


/* Aside */




/* Main */



const IndexPage = () => {
  return (0,emotion_react_esm/* jsx */.tZ)("div", {
    className: "root"
  }, (0,emotion_react_esm/* jsx */.tZ)("aside", null, (0,emotion_react_esm/* jsx */.tZ)(components_ProfilePicture, null), (0,emotion_react_esm/* jsx */.tZ)(components_ContactLinks, null), (0,emotion_react_esm/* jsx */.tZ)(components_Clock, null)), (0,emotion_react_esm/* jsx */.tZ)("main", null, (0,emotion_react_esm/* jsx */.tZ)(components_Introduction, null), (0,emotion_react_esm/* jsx */.tZ)(Experience, null)));
};
const Head = () => (0,emotion_react_esm/* jsx */.tZ)("title", null, "AlvBarros");
/* harmony default export */ const pages = (IndexPage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-tsx.js.map