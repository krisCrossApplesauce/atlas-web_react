module.exports = {

    getFullYear: () => {
        const d = new Date();
        return d.getFullYear();
    },

    getFooterCopy: (isIndex) => {
        if (isIndex === true) {
            return 'Atlas School';
        } else {
            return 'Atlas School main dashboard';
        }
    }

};
