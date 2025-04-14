interface Props {
  withDescription?: boolean;
}

export function SubscriptionButtonWithDescription({
  withDescription = false,
}: Props) {
  return (
    <>
      {withDescription && (
        <div>
          {
            'Подписчики "Плюс" имеют возможность списывать\nбольше бонусов на данную продукцию.\nПодписчики "Плюс" также получают доступ\nк персональным акциям, повышенным бонусам\nи ускоренной доставке.'
          }
        </div>
      )}
      <button id="subscription-button">Попробовать за 30 дней</button>
    </>
  );
}
