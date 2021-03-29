// Write a function that when given a URL as a string, parses out just the domain name and
// returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github"
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

//using regex
function domainName(url) {
  return url
    .replace(/https:\/\//g, "")
    .replace(/http:\/\//g, "")
    .replace(/www./, "")
    .replace(/\..*/g, "");
}

//non regex
function domainName(url) {
  return url
    .replace("https://", "")
    .replace("http://", "")
    .replace("www.", "")
    .split(".")[0];
}
