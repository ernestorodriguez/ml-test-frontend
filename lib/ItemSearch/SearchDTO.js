class SearchDTO {
    constructor(data) {
        this.results = data.results;
        const categoryFilter = data.filters.find((filter) => filter.id === 'category');
        this.categories = categoryFilter.values;
    }
}

module.exports = SearchDTO;