import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faCheck, faHourglass, faSignInAlt, faSignOutAlt, faCaretLeft, faCaretRight,faInfo, faInfoCircle, faSave,faEdit, faPen, faTrashAlt, faSearch, faPlus, faAngleDoubleUp, faAngleDoubleDown, faAngleDoubleRight, faAngleDoubleLeft, faArrowAltCircleDown, faAngleRight, faAngleDown, faAngleUp, faUpload, faCheckCircle, faDownload, faEllipsisH, faArrowRight, faArrowLeft
        , faCloudUploadAlt, faStream, faFolder, faFolderOpen, faAddressBook, faListAlt, faCommentAlt, faSyncAlt, faPaperclip, faDoorOpen, faBook, faQuestion, faBullhorn, faCommentDots, faPaperPlane, faChartPie, faHome, faUserCog, faUserEdit, faUserCheck, faUser, faUsers, faCompass, faInbox, faEnvelope, faEnvelopeOpen, faPhone, faMapMarkerAlt
        , faMinus, faLock, faLockOpen, faFlag, faBuilding, faPlay, faGripVertical, faChartBar, faChartLine, faGlobeAsia, faDiceD20, faFileExport, faGlobe, faFileAlt, faFileContract, faRetweet, faPause, faBold, faItalic, faStrikethrough, faUnderline, faCubes, faParagraph, faListUl, faListOl, faQuoteRight, faCode, faRulerHorizontal, faUndo, faRedo, faTable,
        faCaretUp, faCaretDown, faPlusSquare, faFileExcel, faExternalLinkSquareAlt
        } from '@fortawesome/free-solid-svg-icons'
import { faConnectdevelop, faDigitalOcean, faHubspot
        } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import cssVars from 'css-vars-ponyfill'

Vue.component('fa',FontAwesomeIcon )

library.add(faCheck, faHourglass, faSignInAlt, faSignOutAlt, faCaretLeft, faCaretRight,faInfo, faInfoCircle, faSave, faEdit,faPen, faTrashAlt, faSearch, faPlus, faAngleDoubleUp, faAngleDoubleDown, faAngleDoubleRight, faAngleDoubleLeft, faArrowAltCircleDown, faAngleRight, faAngleDown, faAngleUp, faUpload, faCheckCircle, faDownload, faEllipsisH, faArrowRight, faArrowLeft
, faCloudUploadAlt, faStream, faFolder, faFolderOpen, faAddressBook, faListAlt, faCommentAlt, faSyncAlt, faPaperclip, faDoorOpen, faBook, faQuestion, faBullhorn, faCommentDots, faPaperPlane, faChartPie, faHome, faUserCog, faUserEdit, faUserCheck, faUser, faUsers, faCompass, faInbox, faEnvelope, faEnvelopeOpen, faPhone, faMapMarkerAlt
, faMinus, faLock, faLockOpen, faFlag, faBuilding, faPlay, faGripVertical, faChartBar, faChartLine, faGlobeAsia, faDiceD20, faFileExport, faGlobe, faFileAlt, faFileContract, faRetweet, faPause, faBold, faItalic, faStrikethrough, faUnderline, faCubes, faParagraph, faListUl, faListOl, faQuoteRight, faCode, faRulerHorizontal, faUndo, faRedo, faTable
, faCaretUp, faCaretDown, faPlusSquare, faFileExcel, faExternalLinkSquareAlt)

library.add(faConnectdevelop, faDigitalOcean, faHubspot)

cssVars({
  rootElement: document,
  shadowDOM: false,

  include: 'link[rel=stylesheet], style',
  exclude: '',
  variables: {},

  onlyLegacy: true,
  preserveStatic: true,
  preserveVars: false,
  silent: false,
  updateDOM: true,
  updateURLs: true,
  watch: false

})