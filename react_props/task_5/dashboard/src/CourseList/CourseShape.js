import PropTypes from 'prop-types';

const CourseShape = PropTypes.shape({
    id: PropTypes.id.isRequired,
    name: PropTypes.string.isRequired,
    credit: PropTypes.number.isRequired,
});

export default CourseShape;
