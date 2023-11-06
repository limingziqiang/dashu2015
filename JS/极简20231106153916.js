getDetails(id) {
  this.spinShow = true;
  let obj = {
    id,
    pageParam: {
      pageNo: 1,
      pageSize: 100,
    },
  };
  cServer
    .getContentDetail(obj)
    .then((res) => {
      this.spinShow = false;
      let { modalData } = this;
      modalData.title = res.title;
    })
    .catch((error) => {
      this.isNoData = true;
      this.spinShow = false;
    });
}

// ----------------------------------------------------------------------------------

class DetailsFetcher {
  constructor(config) {
    this.config = config;
    this.spinShow = false;
    this.isNoData = false;
  }

  async fetchDetails(id) {
    try {
      this.spinShow = true;

      const res = await this.config.fetchData(id);

      this.spinShow = false;
      this.updateModalData(res);
    } catch (error) {
      this.isNoData = true;
      this.spinShow = false;
    }
  }

  updateModalData(res) {
    let { modalData } = this;
    modalData.title = this.config.getTitle(res);
  }
}

// 使用示例
const fetcher = new DetailsFetcher({
  fetchData: async (id) => {
    let obj = {
      id,
      pageParam: {
        pageNo: 1,
        pageSize: 100,
      },
    };

    // 实际的网络请求逻辑
    return cServer.getContentDetail(obj);
  },
  getTitle: (res) => res.title,
});

fetcher.fetchDetails(id);
