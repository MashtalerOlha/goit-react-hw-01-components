import PropTypes from 'prop-types';
import {
  StatisticsSection,
  Caption,
  StatList,
  Item,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      <Caption>{title}</Caption>

      <StatList>
        {stats.map(stat => (
          <Item key={stat.id}>
            <span>{stat.label}</span>
            <span>{stat.percentage}</span>
          </Item>
        ))}
      </StatList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
