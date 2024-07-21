// import prueba from ''

import { useMemo, useState } from 'react';
import { infoButtons } from '../../utils';
import Sectionbutton from '../../components/shared/SectionButton/Sectionbutton';
import { useParams } from 'react-router-dom';
import { Overview, OverviewKeys } from '../../types';
import styles from './Details.module.css';
import { data } from '../../utils/data';
import { DetailInfo } from '../../components/shared/DetailInfo/DetailInfo';

export const Details = () => {
  const [selectedOption, setSelectedOption] =
    useState<OverviewKeys>('overview');
  const { name = '' } = useParams();
  const [{ rotation, revolution, radius, temperature, ...planetInfo }] =
    data.filter((planet) => planet.name.toLowerCase() === name);

  const details = useMemo(
    () =>
      [{ rotation }, { revolution }, { radius }, { temperature }].map(
        (item: { [key: string]: unknown }) => {
          const [key] = Object.keys(item);
          console.log(item);
          return {
            value: item[key],
            label: key,
          };
        }
      ),
    [radius, rotation, temperature, revolution]
  );

  console.log(details);

  const selectedInfo: Overview = useMemo(
    () => planetInfo[selectedOption as OverviewKeys],
    [selectedOption, planetInfo]
  );

  const handleInfo = (infoLabel: OverviewKeys) => {
    setSelectedOption(infoLabel);
  };
  return (
    <section className={styles.container}>
      {/* {infoButtons.map(({ label }, index) => (
        <Button
          isActive={isActive === label}
          color={color}
          key={label}
          itemNumber={index + 1}
          onClick={() => setisActive(label)}
        >
          {label}
        </Button>
      ))} */}
      <div className={styles.mobile_btn_section}>
        {infoButtons.map(({ label }) => (
          <Sectionbutton
            onClick={() => handleInfo(label)}
            isActive={label === selectedOption}
            name={name}
          >
            {label}
          </Sectionbutton>
        ))}
      </div>
      <img
        className={styles.planet_img}
        src={planetInfo.images['planet']}
        alt=""
      />
      <section className={styles.content_container}>
        <div className={styles.content}>
          <h1 className={styles.title}>{name}</h1>
          <p className={styles.content_text}>{selectedInfo.content}</p>
          <p className={styles.source}>
            Source :
            <strong>
              <a href={selectedInfo.source} target="_blank">
                Wikipedia
              </a>
            </strong>
            <img src="/assets/icon-source.svg" alt="source" />
          </p>
        </div>
        {/* buttons tablet */}
      </section>
      <section className={styles.details}>
        {details.map((item) => (
          <DetailInfo
            key={item.label}
            label={item.label}
            value={item.value as string}
          />
        ))}
      </section>
    </section>
  );
};
