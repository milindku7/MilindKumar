import React from 'react'
import styles from './Prj.module.css'
import ScatteredMedia from '../Media/ScatteredMedia'
import ScatteredMediaExp from '../Media/ScatteredMediaExp'

type PrjProps = {
	year: string | number
	title: string
	githubUrl?: string
	description: string
	toolsUsed?: string
	img1?: string
	img2?: string
	videoSrc?: string
	videoImageSrc?: string
	bgColor?: string
	dividerColor?: string
	titleColor?: string
	descColor?: string
	yearColor?: string
	mediaVariant?: 'default' | 'exp'
}

const Prj: React.FC<PrjProps> = ({
	year,
	title,
	githubUrl,
	description,
	toolsUsed,
	img1,
	img2,
	videoSrc,
	videoImageSrc,
	bgColor,
	dividerColor,
	titleColor,
	descColor,
	yearColor,
	mediaVariant = 'default'
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

	const seed = `${title}|${description}|${year}|${img1 ? '1' : '0'}${img2 ? '1' : '0'}${videoSrc ? '1' : '0'}${videoImageSrc ? '1' : '0'}`
	const selectedPath = WAVE_PATHS[seededIndex(seed, WAVE_PATHS.length)]

	return (
		<div className={styles.container} style={{ backgroundColor: bgColor }}>
			<div className={styles.contentWrapper}>
				<div className={styles.left}>
					<div className={styles.year} style={{ color: yearColor }}>{year}</div>
					<div className={styles.titleRow}>
						<div className={styles.title} style={{ color: titleColor }}>{title}</div>
						{githubUrl ? (
							<a
								className={styles.githubButton}
								href={githubUrl}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={`Open GitHub repository for ${title}`}
							>
								<svg
									className={styles.githubIcon}
									viewBox="0 0 16 16"
									aria-hidden="true"
								>
									<path
										fill="#000000"
										d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.5-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z"
									/>
								</svg>
								<svg
									className={styles.redirectIcon}
									viewBox="0 0 16 16"
									aria-hidden="true"
								>
									<path
										fill="#000000"
										d="M4.75 3A1.75 1.75 0 003 4.75v6.5C3 12.216 3.784 13 4.75 13h6.5A1.75 1.75 0 0013 11.25V8.5a.75.75 0 00-1.5 0v2.75a.25.25 0 01-.25.25h-6.5a.25.25 0 01-.25-.25v-6.5a.25.25 0 01.25-.25H7.5a.75.75 0 000-1.5H4.75z"
									/>
									<path
										fill="#000000"
										d="M9.25 2a.75.75 0 000 1.5h2.19L7.22 7.72a.75.75 0 101.06 1.06l4.22-4.22v2.19a.75.75 0 001.5 0V2.75A.75.75 0 0013.25 2h-4z"
									/>
								</svg>
							</a>
						) : null}
					</div>
					<p className={styles.desc} style={{ color: descColor }}>{description}</p>
					{toolsUsed ? (
						<p className={styles.tools} style={{ color: descColor }}>
							<strong>Tools Used:</strong> {toolsUsed}
						</p>
					) : null}
				</div>
				<div className={styles.right}>
					{mediaVariant === 'exp' ? (
						<ScatteredMediaExp img1={img1} videoSrc={videoSrc} />
					) : (
						<ScatteredMedia img1={img1} img2={img2} videoSrc={videoSrc} videoImageSrc={videoImageSrc} />
					)}
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