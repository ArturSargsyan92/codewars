export class PaginationHelper {
    public constructor(private collection: string[], private itemsPerPage: number) {
    }

    public itemCount() {
        return this.collection.length;
    }

    public pageCount(): number {
        return Math.ceil(this.collection.length / this.itemsPerPage);
    }

    public pageItemCount(pageIndex: number) {
        if (pageIndex >= this.pageCount() || pageIndex < 0) {
            return -1;
        }
        const max = (pageIndex + 1) * this.itemsPerPage;

        return max > this.itemCount() ? this.itemCount() - (max - this.itemsPerPage) : this.itemsPerPage;
    }

    public pageIndex(itemIndex: number) {
        if (itemIndex < 0 || itemIndex >= this.itemCount()) {
            return -1;
        }

        return Math.floor(itemIndex / this.itemsPerPage);
    }
}

const helper = new PaginationHelper(new Array(24), 10);

console.log(helper.pageItemCount(1));

// 30 > 24 ? 24 - (30 - 10)
