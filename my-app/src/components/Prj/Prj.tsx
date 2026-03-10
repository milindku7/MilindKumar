import React from 'react'
import styles from './Prj.module.css'

type PrjProps = {
	year: string | number
	title: string
	description: string
	img1?: string
	img2?: string
	videoSrc?: string
	bgColor?: string
	dividerColor?: string
	titleColor?: string
	descColor?: string
	yearColor?: string
}

const Prj: React.FC<PrjProps> = ({
	year,
	title,
	description,
	img1,
	img2,
	videoSrc,
	bgColor,
	dividerColor,
	titleColor,
	descColor,
	yearColor
}) => {
	const WAVE_PATHS = [
		"M0,64L48,96C96,128,192,192,288,186.7C384,181,480,107,576,101.3C672,96,768,160,864,176C960,192,1056,160,1152,154.7C1248,149,1344,171,1392,181.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
		"M0,0L0,180L60,170C150,160,240,110,330,120C420,130,510,180,600,170C690,160,780,110,870,120C960,130,1050,180,1140,170C1230,160,1320,110,1410,120L1440,130L1440,0Z",
		"M0,100L80,90C160,80,320,60,480,80C640,100,800,160,960,170C1120,180,1280,140,1360,120L1440,100L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z",
		"M0,120L60,130C120,140,240,160,360,150C480,140,600,100,720,95C840,90,960,120,1080,135C1200,150,1320,150,1380,145L1440,140L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
	]

	function seededIndex(input: string, max: number) {
		let hash = 0
		for (let i = 0; i < input.length; i++) {
			hash = (hash * 31 + input.charCodeAt(i)) >>> 0
		}
		return hash % max
	}

	const seed = `${title}|${description}|${year}|${img1 ? '1' : '0'}${img2 ? '1' : '0'}${videoSrc ? '1' : '0'}`
	const selectedPath = WAVE_PATHS[seededIndex(seed, WAVE_PATHS.length)]

	return (
		<div className={styles.container} style={{ backgroundColor: bgColor }}>
			<div className={styles.contentWrapper}>
				<div className={styles.left}>
					<div className={styles.year} style={{ color: yearColor }}>{year}</div>
					<div className={styles.title} style={{ color: titleColor }}>{title}</div>
					<p className={styles.desc} style={{ color: descColor }}>{description}</p>
				</div>
				<div className={styles.right}>
					<div className={`${styles.frame} ${styles.videoFrame} ${styles.tilted1}`}>
						<div className={styles.placeholder}>Video 1</div>
					</div>
					<div className={`${styles.frame} ${styles.videoFrame} ${styles.tilted2}`}>
						<div className={styles.placeholder}>Video 2</div>
					</div>
					<div className={`${styles.frame} ${styles.pictureFrame} ${styles.tilted3}`}>
						<div className={styles.placeholder}>Pic 1</div>
					</div>
				</div>
			</div>
			<div className={styles.divider} aria-hidden="true" style={{ backgroundColor: dividerColor ?? '#ffffff' }}>
				<svg className={styles.dividerSvg} viewBox="0 0 1440 200" preserveAspectRatio="none">
					<path d={selectedPath} fill={bgColor ?? '#ffffff'} />
				</svg>
			</div>
		</div>
	)
}

export default Prj