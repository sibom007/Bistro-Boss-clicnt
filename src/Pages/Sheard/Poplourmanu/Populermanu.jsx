import Sectiontitle from "../../../Component/section-title/Sectiontitle";
import useManu from "../../../Hooks/usemanu/usemanu";
import ShowManu from "./ShowManu";

const Populermanu = () => {

    const [manu] = useManu();
    const Populer =manu.filter(item => item.category === "popular")

    return (
        <div>
            <section>
                <Sectiontitle
                    Subtitle={"------Check it out------"}
                    Maintitle={"FROM OUR MENU"}
                ></Sectiontitle>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 mb-10">
                    {
                        Populer.map(item => <ShowManu
                            key={item._id}
                            item={item}
                        ></ShowManu>)
                    }
                </div>

            </section>

        </div>
    );
};

export default Populermanu;