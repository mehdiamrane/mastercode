import dayjs from 'dayjs';
import 'dayjs/locale/fr';
dayjs.locale('fr');

export default function formatDate(date) {
  return dayjs(date).format('DD MMM YYYY');
}
