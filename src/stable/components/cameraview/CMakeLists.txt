SET( SOURCE_FILES cameraview.cpp viewer.cpp)

add_definitions(-DGLADE_DIR="${gladedir}")

set( CMAKE_CXX_FLAGS "-Wno-deprecated" )

include_directories(
    ${INTERFACES_CPP_DIR}
    ${LIBS_DIR}
    ${CMAKE_CURRENT_SOURCE_DIR}
    ${gtkmm_INCLUDE_DIRS}
    ${libglademm_INCLUDE_DIRS}
    ${gtkglextmm_INCLUDE_DIRS}
    ${ZLIB_INCLUDE_DIRS}
    ${resourcelocator_INCLUDE_DIRS}
    ${easyiceconfig_INCLUDE_DIRS}
)
link_directories(
	${resourcelocator_LIBRARY_DIRS}
	${easyiceconfig_LIBRARY_DIRS}
)

add_executable (cameraview ${SOURCE_FILES})

TARGET_LINK_LIBRARIES(cameraview
    ${CMAKE_THREAD_LIBS_INIT} 
    ${OpenCV_LIBRARIES}
    ${OpenCVGUI_LIBRARIES}
    ${gtkmm_LIBRARIES}
    ${libglademm_LIBRARIES}
    colorspacesmm
    JderobotInterfaces
    parallelIce
    ${easyiceconfig_LIBRARIES} 
    ${ZeroCIce_LIBRARIES}
    ${ZLIB_LIBRARIES}
${CMAKE_THREAD_LIBS_INIT}
	${resourcelocator_LIBRARIES}
)
