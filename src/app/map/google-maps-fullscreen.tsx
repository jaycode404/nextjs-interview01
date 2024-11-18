'use client'

import { useState, useCallback } from 'react'
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api'

const center = {
  lat: 25.762597309569333,
  lng: -80.19512959438701
}

const mapContainerStyle = {
  width: '100vw',
  height: '100vh'
}

export default function FullscreenMap() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''
  })

  const [map, setMap] = useState(null)
  const [infoWindowOpen, setInfoWindowOpen] = useState(false)

  const onLoad = useCallback(function callback(map) {
    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <div className="absolute w-[15%] h-[50vh] bg-white ml-2 mt-2 shadow-black shadow-md rounded-md">
        <h1 className="text-xl text-black font-bold text-center p-2">Map Marker Info</h1>
        {
        //conditional map marker information
        infoWindowOpen && (
            <p className="text-gray-700">Dummy Text</p>
        )
        }
      </div>
      <Marker
        position={center}
        onClick={() => setInfoWindowOpen(true)}
      />
      {infoWindowOpen && (
        <InfoWindow
          position={center}
          onCloseClick={() => setInfoWindowOpen(false)}
        >
          <div className="p-2">
            <h2 className="text-lg font-semibold text-black">Miami, FL</h2>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  ) : <></>
}