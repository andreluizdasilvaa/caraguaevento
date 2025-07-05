import { useRef, useState, useEffect } from "react";
import { useWindowDimensions, FlatList, Animated, View } from "react-native";

import Paginator from "../components/Paginator";
import PageCarousel from "../components/PageCarousel";  
import OnBoardingTexts from "../constants/OnBoardingTexts";

// Componente para animar cada slide
function OnboardingSlide({ width, isActive, children }) {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (isActive) {
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 700,
                useNativeDriver: true,
            }).start();
        } else {
            fadeAnim.setValue(0);
        }
    }, [isActive]);

    return (
        <Animated.View style={{ flex: 1, opacity: fadeAnim, width }}>
            {children}
        </Animated.View>
    );
}

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slidesRef = useRef(null);

    const { width } = useWindowDimensions();
    const scrollX = useRef(new Animated.Value(0)).current;

    const viewableItemsChanged = useRef(({ viewableItems }) => {
        if (viewableItems && viewableItems.length > 0 && viewableItems[0]?.index !== undefined) {
            setCurrentIndex(viewableItems[0].index);
        }
    }).current;

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50}).current;
    const scrollTo = () => {
        if (currentIndex < OnBoardingTexts.length - 1) {
            slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
        } else {

        }
    }
    const isLastPage = currentIndex === OnBoardingTexts.length - 1;

    return (
        <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
            <FlatList 
                data={OnBoardingTexts}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                onViewableItemsChanged={viewableItemsChanged}
                viewabilityConfig={viewConfig}
                scrollEventThrottle={32}
                overScrollMode="never"
                ref={slidesRef}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX} } }], {
                    useNativeDriver: false,
                })}
                renderItem={({ item: data, index }) => (
                    <OnboardingSlide
                        key={data.id}
                        width={`${width}px`}
                        isActive={index === currentIndex}
                    >
                        <PageCarousel 
                            data={data} 
                            width={width} 
                            scrollTo={scrollTo} 
                            isLastPage={isLastPage} 
                        />
                    </OnboardingSlide>
                )}
            />
            <Paginator data={OnBoardingTexts} scrollX={scrollX} />
        </View>
    );
};