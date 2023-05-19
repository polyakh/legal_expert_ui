import { useNavigation } from 'next/navigation';

export default function LanguageSwitcher() {
  const navigation = useNavigation();
  const { locale, asPath } = navigation;

  const changeLanguage = (e) => {
    const newLocale = e.target.value;
    navigation.push({ pathname: asPath, query: { locale: newLocale } });
  };

  return (
    <select value={locale} onChange={changeLanguage}>
      <option value="en">English</option>
      <option value="fr">French</option>
      <option value="de">German</option>
    </select>
  );
}
