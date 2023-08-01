const { Menu } = require("antd");

export default function Navbar({ data }) {
  if (!data) {
    return <h1>Loading...</h1>;
  }

  const brandModelsMap = {};

  // Group the models by brand
  data.forEach((item) => {
    const { Brand, Model } = item;
    if (!brandModelsMap[Brand]) {
      brandModelsMap[Brand] = [];
    }
    brandModelsMap[Brand].push({ Model, key: `${Brand}_${Model}` });
  });

  const menuItems = Object.entries(brandModelsMap).map(([brand, models]) => {
    const brandKey = `brand_${brand}`;
    return {
      key: brandKey,
      label: brand,
      icon: <DesktopOutlined />,
      children: models.map((model) => (
        <Menu.Item key={model.key} icon={<DesktopOutlined />}>
          {model.Model}
        </Menu.Item>
      )),
    };
  });

  return (
    <Menu theme="dark" mode="inline">
      {menuItems.map((item) => (
        <Menu.SubMenu key={item.key} icon={item.icon} title={item.label}>
          {item.children}
        </Menu.SubMenu>
      ))}
    </Menu>
  );
}
