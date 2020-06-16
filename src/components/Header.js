import React from 'react'

import { Link } from 'react-router-dom'

export default function Header() {

    return (

        <div>
            <div className="header">
                <Link className="headerLogo" to="/">

                    <img src="http://vefshop.wimg.tw/art/efimg_logo.gif?v=8244" alt="" />

                </Link>

                <div className="checkOutLogo">

                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAAA4CAYAAABaOm67AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpEMzQ0MzQxOEVDNUJFMzExOTExRkYwNTk2MDc5M0ZEQiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCREYyNUY2ODRFRjMxMUU2Qjc0MEI3QkY0OTQ5QjNCNSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCREYyNUY2NzRFRjMxMUU2Qjc0MEI3QkY0OTQ5QjNCNSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCQkMwMUI1RkVENEVFNjExQURCMEY0OTE1QkJBREEyMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpEMzQ0MzQxOEVDNUJFMzExOTExRkYwNTk2MDc5M0ZEQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnGxaJ0AAAKoSURBVHja7FuBbcIwEEyqDJBuECZoOkHDBDBCmIAwQcIEwARNJ6g6AXSC0glgA9ggtSUjRZT4ndh+2+CXXkIEHud89t8/Ttg0TeANticPgQfKA+WB8kC5b1HrdUw8lYi1J35+BKAoSFuJWDXxmV96sOXEEw+UmJUeqAdnlY6sV3qgHphVYasoTthNqmDO3WXAUKJ7QKVExrn+fE+6KpL47hIAqiBeWX7/GbAyvi/3EEr2o3isomwaWc4qaFXQ8R9VbOZLzrWYscpWywGQ6gtIKhjlMqsOnOz8b9wq5IGLrKoACbO5ntxQUc/cJVbFjE1xn/GqEpwusarggERtcWtSQ4X/wrjAqoSxqcuObJxaSxgXWAXVoTMdytw1VmUBvzG5Iz7GKoptZlUpMXblQO2Yd9kc2Eh1sgkSlztMoGxl1bsMm3QBRWdmbxGrckBcrtulCiZQF2XLY9UUUVzy9qazCJt0AlUDs4TVLi76lirYQEHrPgn6dVOHsmkOiMtKNJhOoEyzagXshcs+wXSfPTDFKij2nk2ksIUIJ+54fR/KuA8Nv/kG6KYxpJtMAJUL6BhM45YqJoGCWIVtIxHdhL1HDdo4DSYY44yygVVUL70OBQrzxJ1pVm2GgoTNKJOsku6FRcgDngFpW5dJH5sM/ZML9u1RTltk4DepAJ206rAvlrbPVsemSw/JY+I/zW2j7yeSsbcdsU/EU9nxYy69z6D7HHvKrg+1kpMkKLu2gWRXFQuoTCDbpQO7CVRuQH34WLZTgQmUiL1ojD25p6yXIH3HWqBEs87vwLaJyjEYFZxJwD8cIdUCIXYS2Kx7N+tMMIre/AL4zDoYXrRCR7VrGZCwdRT1gumaa51TKYg9JX64oaNWKsZuota7fi5Q9XN+mY7YvigWtD8BBgAeqIfTeatUrwAAAABJRU5ErkJggg==" alt="" />

                </div>

                <div className="wrapper">

                    <input type="text" className="input" placeholder="What are you searching for?" />


                </div>

            </div>

        </div>

    );
}