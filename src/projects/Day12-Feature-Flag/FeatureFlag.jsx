import { useContext } from "react";
import Accordion from "../Day01-Accordion/Accordion";
import RandomColor from "../Day02-Random-colorgen/RandomColor";
import ThemeSwitcher from "../Day07-Theme-Switch/ThemeSwitcher";
import CustomTabParent from "../Day08-CustomTabs/CustomTabParent";
import GithubFind from "../Day10-Github-Profiles/GithubFind";
import AutoComplete from "../Day11-Search-Autocomplete/AutoComplete";
import FeatureFlagGlobalState, {
  FeatureFlagsContext,
} from "./context/FeatureFlagContext";

function FeatureFlags() {
  const { loading, enabledFlags } = useContext(FeatureFlagsContext);

  const componentsToRender = [
    {
      key: "showAccordion",
      component: <Accordion />,
    },
    {
      key: "showThemeSwitcher",
      component: <ThemeSwitcher />,
    },
    {
      key: "showRandomColorGenerator",
      component: <RandomColor />,
    },
    {
      key: "showCustomTabs",
      component: <CustomTabParent />,
    },
    {
      key: "showGithubProfile",
      component: <GithubFind />,
    },
    {
      key: "showSearchAutoComplete",
      component: <AutoComplete />,
    },
  ];

  function checkEnabledFlags(getCurrentKey) {
    return enabledFlags[getCurrentKey];
  }

  if (loading) return <h1>Loading data ! Please wait</h1>;

  return (
    <div className="flex min-h-screen flex-col gap-10 bg-gray-100 p-10">
      <h1 className="text-center text-3xl font-bold">
        Feature Flags Implementation
      </h1>
      <div className="flex flex-col gap-8">
        {componentsToRender.map((componentItem) =>
          checkEnabledFlags(componentItem.key) ? (
            <div
              key={componentItem.key}
              className="rounded-lg border-2 border-gray-300 bg-white p-5 shadow-md"
            >
              <h2 className="mb-4 border-b pb-2 text-xl font-bold">
                {componentItem.key}
              </h2>
              <div className="overflow-hidden">{componentItem.component}</div>
            </div>
          ) : null,
        )}
      </div>
    </div>
  );
}

export default function FeatureFlag() {
  return (
    <FeatureFlagGlobalState>
      <FeatureFlags />
    </FeatureFlagGlobalState>
  );
}
