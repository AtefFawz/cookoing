import {
  otherDataItem,
  HealthyItem,
} from "@/components/data/recipes/HealthJapanese";

export default function HealthJapanese() {
  const { PrintIcon, ShareIcon, AuthorIcon } = otherDataItem;

  const actions = [
    { Icon: PrintIcon, text: otherDataItem.titlePrint },
    { Icon: ShareIcon, text: otherDataItem.titleShare },
  ];

  const ICON_WRAPPER = "flex flex-col justify-center items-center";
  const ICON_STYLE =
    "dark:bg-primary bg-gray-400 rounded-full p-2 lg:p-4 text-gray-900";

  return (
    <section>
      <h1>{otherDataItem.heading}</h1>

      {/* Actions (Print - Share) */}
      <div className="flex gap-4 justify-end items-center w-full py-4">
        {actions.map((act, i) => {
          const Icon = act.Icon;
          return (
            <div key={i} className={ICON_WRAPPER}>
              <span className={ICON_STYLE}>
                <Icon fontSize="large" />
              </span>
              <h5>{act.text}</h5>
            </div>
          );
        })}
      </div>

      {/* Author + Healthy Items */}
      <article className="flex items-center md:gap-4 lg:gap-10">
        <div className="flex gap-2 items-center border-r-2 border-gray-400 md:px-8 px-1">
          <span>
            <AuthorIcon />
          </span>
          <div>
            <h6>{otherDataItem.authorName}</h6>
            <h6>{otherDataItem.authorDate}</h6>
          </div>
        </div>

        {HealthyItem?.length > 0 ? (
          HealthyItem.map((item, id) => {
            const Icon = item.Icon;
            return (
              <div
                key={id}
                className="flex items-center gap-1 md:gap-4 border-r-2 border-gray-400 md:px-8 px-2"
              >
                <Icon fontSize="small" />
                <div>
                  <h6>{item.title}</h6>
                  {item.description && <h6>{item.description}</h6>}
                </div>
              </div>
            );
          })
        ) : (
          <h1 className="text-red-500 w-full text-center text-4xl py-20">
            NOT DATA FOUND
          </h1>
        )}
      </article>
    </section>
  );
}
