const INITIAL_STATE = {
  sections: [
    {
      title: "DAD HATS",
      imgUrl:
        "https://images.unsplash.com/photo-1521369909029-2afed882baee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
      id: 1,
      linkUrl: "shop/hats",
    },
    {
      title: "JERSEYS",
      imgUrl:
        "https://images.unsplash.com/photo-1551479460-5e76c686816a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2220&q=80",
      id: 2,
      linkUrl: "shop/jerseys",
    },
    {
      title: "KICKS",
      imgUrl:
        "https://images.unsplash.com/photo-1473010350295-2c82192ebd8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
      id: 3,
      linkUrl: "shop/sneakers",
    },
    {
      title: "WOMENS",
      imgUrl:
        "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1301&q=80",
      id: 4,
      size: "large",
      linkUrl: "shop/womens",
    },
    {
      title: "MENS",
      imgUrl:
        "https://images.unsplash.com/photo-1520367745676-56196632073f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80",
      id: 5,
      size: "large",
      linkUrl: "shop/mens",
    },
  ],
};

const menuReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default menuReducer;
