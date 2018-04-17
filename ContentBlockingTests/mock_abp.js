
var ABPFilterParser = function() {

    // From abp-filter-parser-*.js
    const elementTypes = {
      SCRIPT: 0x1,
      IMAGE: 0x2,
      STYLESHEET: 0x4,
      OBJECT: 0x10,
      XMLHTTPREQUEST: 0x20,
      OBJECTSUBREQUEST: 0x40,
      SUBDOCUMENT: 0x100,
      DOCUMENT: 0x200,
      OTHER: 0x400,
    };

    function matches(list, trackerUrl, config) {
        return list.match
    }

    return {
        elementTypes: elementTypes,
        matches: matches
    }
}()
