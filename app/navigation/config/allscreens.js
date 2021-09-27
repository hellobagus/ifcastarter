import React from "react";
import SignIn from "@screens/SignIn";
import EHome from "@screens/EHome";
import Profile from "@screens/Profile";
import {
  tabBarIcon,
  tabBarIconHaveNoty,
  BottomTabNavigatorMazi,
} from "@navigation/components";

export const ETabScreens = {
  EHome: {
    component: EHome,
    options: {
      title: "home",
      tabBarIcon: ({ color }) => tabBarIcon({ color, name: "home" }),
    },
  },
  Profile: {
    component: Profile,
    options: {
      title: "account",
      tabBarIcon: ({ color }) => tabBarIcon({ color, name: "user-circle" }),
    },
  },
};

const EMenu = () => <BottomTabNavigatorMazi tabScreens={ETabScreens} />;
export default {
  ECommerceMenu: {
    component: EMenu,
    options: {
      title: "home",
    },
  },
};
