import Vue from 'vue'
import { Button, Form, FormItem, Input, Message, MessageBox, Container, Header, Main, Footer, Card, Tabs, TabPane, Divider } from 'element-ui'
/* Message导入弹框提示 */

/* import Timeline from './timeline/index.js'
import TimelineItem from './timeline-item/index.js' */

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Card)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Divider)

/* 全局挂载 */
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
