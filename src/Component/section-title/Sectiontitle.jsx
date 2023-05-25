const Sectiontitle = ({ Subtitle, Maintitle }) => {
    return (
        <div className="md:w-4/12 text-center mx-auto mt-7">
            <p className="text-yellow-400 mb-3">{Subtitle}</p>
            <h1 className="border-y-4 text-3xl uppercase py-4">{Maintitle}</h1>
        </div>
    );
};

export default Sectiontitle;