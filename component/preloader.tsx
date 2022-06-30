interface PreloaderPropsType{
    active: boolean
}

export default function Preloader(props:PreloaderPropsType) {
    const { active } = props;
    return (
        <div className={active ? "preload" : "preload disabled"}>
            <img src="/preload.svg" />
        </div>
    )
}