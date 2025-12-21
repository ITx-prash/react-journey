const dummyApiResponse = {
  showAccordion: true,
  showRandomColorGenerator: true,
  showThemeSwitcher: true,
  showCustomTabs: true,
  showGithubProfile: true,
  showSearchAutoComplete: true,
};

const featureFlagApiServiceCall = () => {
  return new Promise((resolve, reject) => {
    dummyApiResponse;

    if (dummyApiResponse)
      setTimeout(() => {
        resolve(dummyApiResponse);
      }, 1000);
    else reject("Some error occurred. Please try again!");
  });
};
export default featureFlagApiServiceCall;
