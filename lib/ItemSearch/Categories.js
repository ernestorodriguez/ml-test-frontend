class Categories {
    constructor(categoriesData, itemsData){
        const categoryData = categoriesData.find((category) => this.getMostFrequentCategory(itemsData) === category.id);
        this.list = categoryData.path_from_root.map((value) => value.name);
    }

    getMostFrequentCategory(itemsData) {
        let mostFrequentCategory = 'nullCategory';
        const counts = {
            [mostFrequentCategory]: 0,
        };

        for (let i = 0; i < itemsData.length; i++) {
            let num = itemsData[i].category_id;
            counts[num] = counts[num] ? counts[num] + 1 : 1;
        }

        Object.keys(counts).map((key) => {
            const current = key;
            if( counts[current] > counts[mostFrequentCategory] ) {
                mostFrequentCategory = current;
            }
        });

        return mostFrequentCategory;

    }

    getList() {
        return this.list;
    }
}

module.exports = Categories;