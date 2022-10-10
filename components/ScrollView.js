import style from "../styles/ScrollView.module.css";

const ScrollView = ({ children }) => {
	return (
		<>
			<section className={style.scroll_container}>
				<section className={style.scroll_princial_content}>
					<article className={style.slider}>{children}</article>
				</section>
			</section>
		</>
	);
};

export default ScrollView;
