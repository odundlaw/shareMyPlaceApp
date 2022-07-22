import {
  UserIcon,
  MapIcon,
  PlusIcon,
  LoginIcon,
  LogoutIcon,
} from "@heroicons/react/outline";

export const AuthLinkItems = [
  { to: "/", text: "All Users", icon: UserIcon },
  { to: "/1/places", text: "My Places", icon: MapIcon },
  { to: "/places/new", text: "Add Place", icon: PlusIcon },
  { to: "/logout", text: "LogOut User", icon: LogoutIcon },
];

export const UnAuthenticatedLinkItems = [
  { to: "/", text: "All Users", icon: UserIcon },
  { to: "/1/places", text: "My Places", icon: MapIcon },
  { to: "/authentication", text: "Authenticate", icon: LoginIcon },
];
