import styles from "./startWave.module.scss";
import Box from "@mui/material/Box";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

function StartWave() {
  const { width } = useWindowDimensions();
  let breakpoint = false;
  if (width < 971) {
    breakpoint = true;
  }
  if (breakpoint) {
    return (
      <>
        <Box className={`${styles.waveWrapper} ${styles.waveAnimationMobile}`}>
          <Box className={`${styles.waveWrapperInner} ${styles.bgTop}`}>
            <Box
              className={`${styles.wave} ${styles.waveTopMobile}`}
              sx={{
                backgroundImage: `url('http://front-end-noobs.com/jecko/img/wave-top.png')`,
              }}
            ></Box>
          </Box>
          <Box className={`${styles.waveWrapperInner} ${styles.bgMiddle}`}>
            <Box
              className={`${styles.wave} ${styles.waveMiddleMobile}`}
              sx={{
                backgroundImage: `url('http://front-end-noobs.com/jecko/img/wave-mid.png')`,
              }}
            ></Box>
          </Box>
          <Box className={`${styles.waveWrapperInner} ${styles.bgBottom}`}>
            <Box
              className={`${styles.wave} ${styles.waveBottomMobile}`}
              sx={{
                backgroundImage: `url('http://front-end-noobs.com/jecko/img/wave-bot.png')`,
              }}
            ></Box>
          </Box>
        </Box>
      </>
    );
  }
  return (
    <>
      <Box className={`${styles.waveWrapper} ${styles.waveAnimation}`}>
        <Box className={`${styles.waveWrapperInner} ${styles.bgTop}`}>
          <Box
            className={`${styles.wave} ${styles.waveTop}`}
            sx={{
              backgroundImage: `url('http://front-end-noobs.com/jecko/img/wave-top.png')`,
            }}
          ></Box>
        </Box>
        <Box className={`${styles.waveWrapperInner} ${styles.bgMiddle}`}>
          <Box
            className={`${styles.wave} ${styles.waveMiddle}`}
            sx={{
              backgroundImage: `url('http://front-end-noobs.com/jecko/img/wave-mid.png')`,
            }}
          ></Box>
        </Box>
        <Box className={`${styles.waveWrapperInner} ${styles.bgBottom}`}>
          <Box
            className={`${styles.wave} ${styles.waveBottom}`}
            sx={{
              backgroundImage: `url('http://front-end-noobs.com/jecko/img/wave-bot.png')`,
            }}
          ></Box>
        </Box>
      </Box>
    </>
  );
}

export default StartWave;
