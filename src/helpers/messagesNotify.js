import { Notify } from "quasar";

const messagesNotify = (mes) => {
  Notify.create({
    message: mes,
    position: 'right',
  })
}
export default messagesNotify
