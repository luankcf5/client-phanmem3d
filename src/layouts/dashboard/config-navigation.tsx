import { useMemo } from 'react';

import { paths } from 'src/routes/paths';

import { useTranslate } from 'src/locales';

import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const ICONS = {
  sale: icon('ic_log'),
};

// ----------------------------------------------------------------------

export function useNavData() {
  const { t } = useTranslate();

  const data = useMemo(
    () => [
      {
        subheader: 'TRUNG HỌC PHỔ THÔNG',
        items: [
          {
            title: 'Môn Hoá học',
            path: paths.dashboard.thpt.hoahoc.root,
            icon: ICONS.sale,
            children: [
              {
                title: 'Phản ứng nitro hoá benzene',
                path: paths.dashboard.thpt.hoahoc.phanungnitrohoabezenne,
              },
              {
                title: 'Phản ứng thuỷ phân tinh bột',
                path: paths.dashboard.thpt.hoahoc.phanungthuyphantinhbot,
              },
              {
                title: 'Phản ứng thuỷ phân Celulose',
                path: paths.dashboard.thpt.hoahoc.phanungthuyphancelulose,
              },
              {
                title: 'Xà phòng hoá chất béo',
                path: paths.dashboard.thpt.hoahoc.xaphonghoachatbeo,
              },
              {
                title: 'Điều chế Ethy Acetate',
                path: paths.dashboard.thpt.hoahoc.dieucheethyacetate,
              },
              {
                title: 'Thuỷ phân Ethy Bromide',
                path: paths.dashboard.thpt.hoahoc.thuyphanethybromide,
              },
            ],
          },

          {
            title: 'Môn Vật lý',
            path: paths.dashboard.thpt.vatly.root,
            icon: ICONS.sale,
            children: [
              {
                title: 'Mô phỏng lò luyện gang',
                path: paths.dashboard.thpt.vatly.mophongloluyengang,
              },
              {
                title: 'Mô phỏng lò xi măng',
                path: paths.dashboard.thpt.vatly.mophongloximang,
              },
              {
                title: 'Tán sắc ánh sáng',
                path: paths.dashboard.thpt.vatly.tansacanhsang,
              },
              {
                title: 'Âm thanh trong các môi trường',
                path: paths.dashboard.thpt.vatly.anthanhtrongcacmoitruong,
              },
              {
                title: 'Sự phản xạ ánh sáng',
                path: paths.dashboard.thpt.vatly.suphanxaanhsang,
              },
              {
                title: 'Sự khúc xạ ánh sáng',
                path: paths.dashboard.thpt.vatly.sukhucxaanhsang,
              },
              {
                title: 'Đường sức từ nam châm',
                path: paths.dashboard.thpt.vatly.duongsuctunamcham,
              },
              {
                title: 'Thế năng hấp dẫn',
                path: paths.dashboard.thpt.vatly.thenanghapdan,
              },
              {
                title: 'Cấu trúc hạt nhân',
                path: paths.dashboard.thpt.vatly.cautruchatnhan,
              },
              {
                title: 'Quá trình chụp X Quang',
                path: paths.dashboard.thpt.vatly.quatrinhchupxquang,
              },
              {
                title: 'Cấu tạo mạch điện',
                path: paths.dashboard.thpt.vatly.cautaomachdien,
              },
              {
                title: 'Mô hình tụ điện',
                path: paths.dashboard.thpt.vatly.mohinhtudien,
              },
              {
                title: 'Mô phỏng giao động',
                path: paths.dashboard.thpt.vatly.mophonggiaodong,
              },
              {
                title: 'Nhật thực nguyệt thực thuỷ triều',
                path: paths.dashboard.thpt.vatly.nhatthucnguyetthucthuytrieu,
              },
              {
                title: 'Trái Đất Mặt Trời Mặt Trăng',
                path: paths.dashboard.thpt.vatly.traidatmattroimattrang,
              },
              {
                title: 'Mô phỏng bản đồ sao',
                path: paths.dashboard.thpt.vatly.mophongbandosao,
              },
              {
                title: 'Mô phỏng hệ Mặt Trời',
                path: paths.dashboard.thpt.vatly.mophonghemattroi,
              },
            ],
          },

          {
            title: 'Môn Sinh học',
            path: paths.dashboard.thpt.sinhhoc.root,
            icon: ICONS.sale,
            children: [
              {
                title: 'Trao đổi nước ở thực vật',
                path: paths.dashboard.thpt.sinhhoc.traodoinuocothucvat,
              },
            ],
          },
        ],
      },
      {
        subheader: 'TRUNG HỌC CƠ SỞ',
        items: [
          {
            title: 'Môn Vật lý',
            path: paths.dashboard.thcs.vatly.root,
            icon: ICONS.sale,
            children: [
              {
                title: 'Âm thanh trong các môi trường',
                path: paths.dashboard.thcs.vatly.anthanhtrongcacmoitruong,
              },
              {
                title: 'Sự phản xạ ánh sáng',
                path: paths.dashboard.thcs.vatly.suphanxaanhsang,
              },
              {
                title: 'Sự khúc xạ ánh sáng',
                path: paths.dashboard.thcs.vatly.sukhucxaanhsang,
              },
              {
                title: 'Đường sức từ nam châm',
                path: paths.dashboard.thcs.vatly.duongsuctunamcham,
              },
            ],
          },

          {
            title: 'Môn Sinh học',
            path: paths.dashboard.thcs.sinhhoc.root,
            icon: ICONS.sale,
            children: [
              {
                title: 'Trao đổi nước ở thực vật',
                path: paths.dashboard.thcs.sinhhoc.traodoinuocothucvat,
              },
            ],
          },
        ],
      },
    ],
    [t]
  );

  return data;
}
