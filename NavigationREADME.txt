Navigation Structure Notes:
===========================
- AppSwitchNavigator
  - Welcome Screen
    - Login Button
    - Sign Up Button
  - AppDrawerNavigator
    - Dashboard : DashboardStackNavivigator(needed for header and to change the header based on the tab)
      - DashboardTabNavigator
        - Tab 1 - Feedstack
        - Tab 2 - ProfileStack
        - Tab 3 - SettingsStack
      - Any files you don't want part of the Tab Navigator can go here.