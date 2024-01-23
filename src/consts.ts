import { t } from "./i18n.ts";

export const EN_UI_LABELS = {
  AppName: "Stimulator",
  SuspendTitle: "Disable Automatic Suspending",
  IdleTitle: "Disable Screen Blanking",
  Indefinitely: "Current state: Indefinitely",
  SystemDefault: "Current state: System default",
  About: "About Stimulator",
  SimulatorActive: "Stimulator is active",
  Comments: "Keep your computer awake",
  Keywords: "caffeine;nosleep;awake;keepawake;keepon;",
  KeyboardShortcuts: "Keyboard Shortcuts",
  Quit: "Quit",
  General: "General",
  ConfirmClose: "Confirm close?",
  ConfirmCloseBody: "Stimulator is still active, do you want to close?",
  Cancel: "Cancel",
  Close: "Close",
  EnableExistConfirmation: "Enable exit confirmation",
  Preferences: "Preferences",
};

export const UI_LABELS = {
  AppName: t(EN_UI_LABELS.AppName),
  SuspendTitle: t(EN_UI_LABELS.SuspendTitle),
  IdleTitle: t(EN_UI_LABELS.IdleTitle),
  Indefinitely: t(EN_UI_LABELS.Indefinitely),
  SystemDefault: t(EN_UI_LABELS.SystemDefault),
  About: t(EN_UI_LABELS.About),
  SimulatorActive: t(EN_UI_LABELS.SimulatorActive),
  Comments: t(EN_UI_LABELS.Comments),
  Keywords: t(EN_UI_LABELS.Keywords),
  KeyboardShortcuts: t(EN_UI_LABELS.KeyboardShortcuts),
  Quit: t(EN_UI_LABELS.Quit),
  General: t(EN_UI_LABELS.General),
  ConfirmClose: t(EN_UI_LABELS.ConfirmClose),
  ConfirmCloseBody: t(EN_UI_LABELS.ConfirmCloseBody),
  Cancel: t(EN_UI_LABELS.Cancel),
  Close: t(EN_UI_LABELS.Close),
  EnableExistConfirmation: t(EN_UI_LABELS.EnableExistConfirmation),
  Preferences: t(EN_UI_LABELS.Preferences),
};

export const APP_ID = "io.github.sigmasd.stimulator";
export const APP_NAME = UI_LABELS.AppName;
export const VERSION = "0.8.1";
