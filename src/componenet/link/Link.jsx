import PropTypes from 'prop-types';

const Link = ({route}) => {
    const {name} = route;
    return (
        < >
            <li className="m-4 hover:bg-blue-500">
                <a href="{`route.path`}">{name}</a></li>
         
            
        </>
    );
};

Link.propTypes ={
    route: PropTypes.object.isRequired,
   
}

export default Link;