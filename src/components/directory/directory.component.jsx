import React from "react";

import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "Kopi Tetangga",
          imageUrl:
            "https://d1sag4ddilekf6.cloudfront.net/compressed/items/6-CZBFGKABAAEBRE-CZB1JLA2PF4JT2/photo/a2e4b470691e4898b590c7274e41cf43_1583742818742077797.jpg",
          id: 1,
          linkUrl: "shop/kopteng",
        },
        {
          title: "Kopi Premium",
          imageUrl:
            "https://d1sag4ddilekf6.cloudfront.net/compressed/items/6-CZBFGKABAAEBRE-CZB1JLA3SFWGTE/photo/2869386ef9da4519b81735c29dc16e63_1583742819855670226.jpg",
          id: 2,
          linkUrl: "shop/kopipremium",
        },
        {
          title: "Selain Kopi",
          imageUrl:
            "https://d1sag4ddilekf6.cloudfront.net/compressed/items/IDITE2020031600313520553/photo/menueditor_item_4ce7ce071b5b4fa389698274fc30279e_1596936669739176951.jpg",
          id: 3,
          linkUrl: "shop/selkop",
        },
        {
          title: "Tukucur",
          imageUrl:
            "https://ecs7.tokopedia.net/img/cache/700/product-1/2020/5/9/101671299/101671299_cef2d04b-050d-41e8-aae4-873461c0f5f8_684_684.jpg",
          size: "large",
          id: 4,
          linkUrl: "shop/tukucur",
        },
        {
          title: "tukudapan",
          imageUrl:
            "https://d1sag4ddilekf6.cloudfront.net/compressed/items/6-CZBFGKABAAEBRE-CZB1JLBECREYEE/photo/3bf29c036cc44c88a4ba546430b035f4_1583742824178932264.jpg",
          size: "large",
          id: 5,
          linkUrl: "shop/tukudapan",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
