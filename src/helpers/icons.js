import {
  faTrash,
  faSignOutAlt,
  faEdit,
  faSpinner,
  faCircleNotch,
  faPlusCircle,
  faPhone,
  faIdCard,
  faLink,
  faEnvelope,
  
  faMapMarkedAlt,
  faLock
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
  return library.add(
    faTrash,
    faSignOutAlt,
    faEdit,
    faIdCard,
    faLink,
    faSpinner,
    faCircleNotch,
    faPlusCircle,
    faPhone,
    faEnvelope,
    faMapMarkedAlt,
    faLock
  );
};

export default Icons;
