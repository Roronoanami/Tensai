// import ProfilePageOther from "../pages/ProfilePageOther";
// export default function Page({ params }) {
//   return <ProfilePageOther username={params.username} />;
// }

// import ProfilePageOther from "../../pages/ProfilePageOther";

// export default function Page({ params }) {
//   return <ProfilePageOther username={params.username} />;
// }

import { use } from "react";
import ProfilePageOther from "../../pages/ProfilePageOther";

export default function Page({ params }) {
  const { username } = use(params);

  return <ProfilePageOther username={username} />;
}