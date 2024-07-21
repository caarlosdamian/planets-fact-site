import styles from './DetailsInfo.module.css';

interface Props {
  label: string;
  value: string;
}

export const DetailInfo = ({ label, value }: Props) => {
  return (
    <div className={styles.info_btn}>
      <p className={styles.info_label}>{label}</p>
      <p className={styles.info_value}>{value}</p>
    </div>
  );
};
