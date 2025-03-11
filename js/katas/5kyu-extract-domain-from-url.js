/* Description ---------------------------------------- 
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"
*/

/* Solution Example ----------------------------------- */
// Three cases: "http://...", "www...", "domain.com"
function domainName(url) {
  let domainAndExtension;
  // Slice off pre-domain details
  if (url.indexOf("www.") !== -1) {
    domainAndExtension = url.slice(url.indexOf("www.") + 4);
  } else if (url.indexOf("//") !== -1) {
    domainAndExtension = url.slice(url.indexOf("//") + 2);
  } else {
    domainAndExtension = url;
  }
  //   Slice off post-domain extension
  return domainAndExtension.slice(0, domainAndExtension.indexOf("."));
}

function domainName(url) {
  url = url.replace("https://", "");
  url = url.replace("http://", "");
  url = url.replace("www.", "");
  return url.split(".")[0];
}

function domainName(url) {
  return url
    .replace("http://", "")
    .replace("https://", "")
    .replace("www.", "")
    .split(".")[0];
}

/* Tests ---------------------------------------------- */

/* 

describe("Sample test", () => {
  it("Should pass sample tests", () => {
    assert.equal(domainName("http://google.com"), "google");
    assert.equal(domainName("http://google.co.jp"), "google");
    assert.equal(domainName("www.xakep.ru"), "xakep");
    assert.equal(domainName("https://youtube.com"), "youtube");
  })  
})

*/
