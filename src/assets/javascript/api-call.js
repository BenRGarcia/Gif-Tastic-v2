export default {
  url: "https://api.giphy.com/v1/gifs/search",
  apiKey: "yZgwRMNKMUe6DZ9WDUONVc4R1kCEEGFA",
  limit: 6,
  lastKeyword: "",
  lastPromise: null,

  search(keyword) {
    // Screen out duplicate 'clicks' of same badge before calling API
    if (keyword !== this.lastKeyword) {
      this.lastKeyword = keyword;

      // Replace spaces with '+' in keyword, assemble URL for api call
      let query = this.sanitizeKeyword(keyword);
      let url = this.makeQueryURL(query);

      // Make API call
      this.lastPromise = this.callAPI(url);
    }
    return this.lastPromise;
  },

  sanitizeKeyword(keyword) {
    return keyword.replace(' ', '+');
  },

  makeQueryURL(sanitizedKeyword) {
    let queryURL = this.url;
    queryURL += '?' + $.param({
      'q': sanitizedKeyword,
      'limit': this.limit,
      'api_key': this.apiKey
    });
    return queryURL;
  },

  callAPI(queryURL) {
    return $.ajax({
      url: queryURL,
    })
      .done( response => {
        return response;
      });
  }
}
