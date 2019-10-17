const getPath = element => {
    const getSiblings = (el, count) =>
        el.previousElementSibling ? getSiblings(el.previousElementSibling, ++count) : count;

    const getTags = (collection, el) => {
        collection.push({name: el.localName, number: getSiblings(el, 0)});
        return el.parentElement ? getTags(collection, el.parentElement) : collection;
    }

    const buildSelector = () => {
        const tags = getTags([], element);
        let selector = '';
        do {
            const el = tags.pop();
            selector += el.name + (el.number ? `:nth-child(${el.number + 1})`: '') + '>';
        } while (tags.length);

        return selector.slice(0, -1);
    }
    return buildSelector();
};
