// import prueba from ''

import { useMemo, useState } from 'react';
import { infoButtons } from '../../utils';
import Sectionbutton from '../../components/shared/SectionButton/Sectionbutton';
import { useParams } from 'react-router-dom';
import { Overview, OverviewKeys } from '../../types';
import styles from './Details.module.css';
import { data } from '../../utils/data';
import { DetailInfo } from '../../components/shared/DetailInfo/DetailInfo';
import { Button } from '../../components/shared/Button/Button';

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

  const selectedInfo: Overview = useMemo(
    () => planetInfo[selectedOption as OverviewKeys],
    [selectedOption, planetInfo]
  );

  const handleInfo = (infoLabel: OverviewKeys) => {
    setSelectedOption(infoLabel);
  };

  return (
    <section className={styles.container}>
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
      <div className={styles.img_content_container}>
        <div className={styles.img_container}>
          <img
            className={styles.planet_img}
            src={
              planetInfo.images[
                selectedOption === 'structure' ? 'internal' : 'planet'
              ]
            }
            alt="planet"
          />
          {selectedOption === 'geology' && (
            <img
              className={styles.planet_img_geology}
              src={planetInfo.images['geology']}
              alt="planet"
            />
          )}
        </div>
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
          <div className={styles.tablet_btns}>
            {infoButtons.map(({ label }, index) => (
              <Button
                isActive={selectedOption === label}
                name={name}
                key={label}
                itemNumber={index + 1}
                onClick={() => setSelectedOption(label)}
              >
                {label}
              </Button>
            ))}
          </div>
        </section>
      </div>
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
