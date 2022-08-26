import {
  UserIcon,
  MapIcon,
  PlusIcon,
  LoginIcon,
  LogoutIcon,
} from "@heroicons/react/outline";


export const AuthLinkItems = (authUser) => [
  { to: "/", text: "All Users", icon: UserIcon },
  { to: `${authUser}/places`, text: "My Places", icon: MapIcon },
  { to: "/places/new", text: "Add Place", icon: PlusIcon },
  { to: "/signOut", text: "SignOut User", icon: LogoutIcon },
];

export const UnAuthenticatedLinkItems = [
  { to: "/", text: "All Users", icon: UserIcon },
  { to: "/places", text: "My Places", icon: MapIcon },
  { to: "/authentication", text: "Authenticate", icon: LoginIcon },
];
