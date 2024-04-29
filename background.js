
const rules = [
    {
        id: 1,
        priority: 1,
        action: { type: "block" },
        condition: {
            urlFilter: "*://*.facebook.com/*",
            resourceTypes: ["main_frame"]
        }
    }
];

chrome.declarativeNetRequest.updateDynamicRules({
    addRules: rules,
    removeRuleIds: [1]
});