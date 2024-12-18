import { TSidebarItem, TUserPath } from "../types";

const sidebarItemsGenerator = (items: TUserPath[], role: string) => {
  const sidebarItems = items.reduce((acc: TSidebarItem[], item) => {
    if (item.path && item.name && item.children === undefined) {
      acc.push({
        title: item.name,
        url: `/${role}/${item.path}`,
        icon: item.icon,
      });
    }

    if (item.children) {
      acc.push({
        title: item.name!,
        url: item.name ?? "",
        icon: item?.icon,
        children: item.children.map((child) => {
          if (child.name) {
            return {
              title: child.name!,
              url: `/${role}/${child.path}`,
              icon: child.icon
            };
          }
        }),
      });
    }

    return acc;
  }, []);

  return sidebarItems;
};

export default sidebarItemsGenerator;
