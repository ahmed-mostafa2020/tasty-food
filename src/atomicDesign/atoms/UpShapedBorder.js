import { ChangeTheme } from "../../context/ThemeContext";

const UpShapedBorder = ({ fill }) => {
  const { myPalette } = ChangeTheme();

  return (
    <svg
      style={{ marginBottom: " -7px", width: "100%" }}
      src="http://www.w3.org/2000/svg"
      width="1440"
      height="59"
      viewBox="0 0 1440 59"
    >
      <path
        d="M8.15 58.999H256.416H261.336H1440V37.373C1434.96 36.159 1426.96 38.29 1420.29 36.767C1421.43 35.668 1418.45 35.436 1416.94 34.894C1422.91 33.463 1431.62 32.844 1440 32.233V22.828C1431.57 21.697 1426.94 19.77 1413.58 19.671C1412.4 20.375 1410.36 20.731 1406.86 20.374C1402.57 21.426 1400.86 23.018 1393.45 23.419C1392.45 23.002 1390.33 22.823 1391.22 22.014C1388.05 21.82 1388.32 22.343 1385.62 22.247C1381.3 20.852 1365.46 20.028 1372.21 17.798L1370.53 17.68L1372.21 17.563C1369.86 16.991 1370.6 17.064 1371.09 16.157C1366.63 16.083 1362.83 16.145 1361.02 16.627L1360.47 16.978C1359.15 16.194 1354.77 16.139 1351.52 16.352L1352.08 15.923C1344.82 16.048 1353.73 15.545 1349.84 15.221C1349.09 15.714 1343.34 14.679 1342.02 15.221L1342.57 15.573L1340.9 15.69C1340.9 15.924 1341.8 15.968 1342.02 16.158C1339 16.384 1336.62 16.746 1336.42 17.564C1338.73 18.332 1343.95 18.486 1344.25 19.672C1344.5 19.49 1344.28 19.21 1345.37 19.204C1354.4 19.966 1361.28 21.179 1369.97 22.014C1370.53 24.945 1356.34 25.221 1347.61 25.995C1347.36 26.438 1348.87 26.513 1348.73 26.932C1347.07 26.809 1345.91 26.586 1344.25 26.462C1344.71 27.028 1342.21 26.972 1343.13 27.634L1344.44 27.985L1343.13 28.338C1343.37 28.6 1344.38 28.702 1345.37 28.806C1346.39 27.476 1358.59 27.707 1357.67 26.697C1368.57 26.247 1370.78 23.98 1385.62 24.355C1385.64 24.821 1388.68 24.654 1387.86 25.293C1380.06 26.001 1375.88 27.468 1367.73 28.103C1363.44 30.484 1349.98 30.944 1342.02 32.553C1341.83 32.279 1340.25 32.298 1338.66 32.318C1336.92 33.589 1334.02 34.795 1327.48 35.598C1318.3 35.49 1310.32 35.133 1308.47 33.49C1309.79 32.908 1310.32 32.158 1312.94 31.849C1304.78 32.545 1309.74 30.491 1305.12 30.446C1302.44 30.352 1305.74 31.512 1301.76 31.149C1299.8 31.091 1299.21 30.745 1299.53 30.212C1292.8 30.125 1283.94 30.654 1276.05 30.212C1272.07 30.952 1270.48 31.128 1264.87 30.679C1261.93 31.704 1265.04 33.202 1258.16 33.724C1256.81 35.021 1261.35 35.085 1261.51 36.064C1257.33 37.703 1265.57 38.981 1264.87 39.813C1252.22 38.702 1253.88 35.269 1253.68 32.787C1253.63 32.083 1249.72 31.63 1253.68 31.149C1250.16 31.184 1251.51 30.199 1249.21 29.977C1248.09 29.977 1246.97 29.977 1245.85 29.977L1246.42 30.329C1244.85 30.116 1243.95 30.037 1243.06 29.977L1243.62 29.744C1241.92 29.241 1238.84 29.025 1236.91 28.573C1241.79 27.308 1236.88 25.946 1232.44 25.294C1235.69 25.09 1233.7 24.943 1233.56 24.356C1230.29 23.893 1229.93 24.274 1227.96 23.654C1227.3 23.169 1229.35 22.115 1226.84 22.015C1226.71 23.112 1225.22 21.758 1222.38 22.015C1222.32 22.337 1222.9 22.528 1223.49 22.716C1220.09 22.706 1217.8 22.929 1216.78 23.42L1218.46 23.691L1215.11 23.77L1215.67 23.419C1214.41 23.369 1213.92 23.157 1213.43 22.949C1215.35 22.963 1216.3 22.77 1216.78 22.483C1211.27 22.622 1211.27 21.606 1210.08 20.842C1203.19 20.637 1204.38 21.761 1203.37 22.248C1201.61 22.146 1202.41 21.511 1198.89 21.78C1197.97 22.287 1194.68 22.301 1194.42 22.949C1201.45 23.657 1196.88 26.125 1196.66 28.102C1184.86 27.685 1186.85 24.381 1176.53 23.653C1171.15 25.081 1162.9 24.299 1158.64 23.185C1157.83 21.286 1167.07 19.556 1158.64 18.734C1155.23 19.191 1151.18 19.513 1145.22 19.438C1143.08 18.403 1137.72 18.042 1130.69 18.032C1130.11 20.963 1134.68 22.539 1136.28 25.057C1133.22 25.971 1126.46 24.823 1123.98 25.995L1124.54 26.346C1123.05 26.266 1121.56 26.222 1120.06 26.346L1120.62 25.995C1111.53 25.869 1111.7 25.917 1104.97 25.76C1105.56 24.354 1103.33 24.759 1098.27 24.824C1097.6 24.077 1100.36 24.099 1098.27 23.653C1093.51 23.145 1088.81 23.111 1084.84 22.949C1084.08 22.017 1082.02 21.357 1082.61 20.139C1076.22 20.619 1081.47 18.66 1078.14 18.499C1078.14 18.733 1078.14 18.967 1078.14 19.204C1069.88 18.894 1064.89 20.863 1054.66 20.139C1052.04 18.58 1043.2 18.324 1043.48 16.158C1038.53 16.137 1035.4 16.497 1033.41 17.095C1038.61 17.411 1034.68 19.639 1041.24 19.672C1040.62 20.714 1035.78 20.87 1032.29 21.312C1023.65 19.141 1000.18 20.074 999.867 16.159C996.464 16.734 989.57 16.097 992.036 17.096C991.355 16.771 987.738 17.061 987.569 16.629C989.816 16.218 986.055 15.085 986.451 14.285C990.616 14.714 989.001 13.881 989.805 12.881C983.741 12.998 984.376 12.046 981.981 11.709C977.651 11.098 975.357 11.981 970.796 11.475C970.884 11.884 970.55 12.204 969.68 12.412C964.069 11.529 962.008 13.05 958.497 13.35L957.192 13.7L955.143 13.583C957.362 15.435 960.431 15.733 965.206 16.863C966.154 16.175 968.809 17.002 970.795 16.863C974.286 16.444 970.438 15.945 973.032 15.458C978.467 15.414 975.238 17.18 978.626 17.565C975.498 17.16 968.709 16.704 967.441 17.8C970.155 18.557 974.8 18.911 976.388 19.906C974.676 23.933 990.163 24.358 995.397 26.933C989.831 27.641 985.348 28.576 978.626 29.04C981.87 29.297 983.994 29.788 986.45 30.212C982.426 30.931 979.806 31.941 974.151 32.318C970.931 32.289 972.209 31.32 968.559 31.382C962.835 32.385 960.167 31.3 956.264 32.318C955.204 31.213 949.24 31.136 947.313 30.212C944.26 30.04 945.06 30.676 942.844 30.679L943.402 31.031C942.536 30.839 941.496 30.729 940.646 30.724C940.199 30.995 938.462 31.213 936.692 31.499L937.255 31.149C932.281 30.939 929.315 30.312 928.306 29.274C924.741 29.135 924.849 29.714 922.717 29.274C925.768 28.639 919.824 28.691 920.48 27.87C915.055 28.367 911.869 27.039 903.712 27.4C901.647 28.609 893.85 28.615 892.525 29.978C893.608 30.765 895.709 31.342 898.114 31.85C889.619 31.892 896.079 30.997 889.167 31.15C888.921 31.591 890.431 31.666 890.292 32.085C883.236 31.896 879.897 34.197 871.281 34.427C868.58 33.883 873.027 33.8 873.518 33.256C871.164 33.048 868.548 32.892 866.808 32.554L866.252 32.905C865.712 32.437 865.826 31.843 862.897 31.734L864.573 31.618C861.762 30.957 858.44 30.404 855.628 29.744C855.624 29.507 856.537 29.465 856.747 29.274L855.066 29.003L855.628 28.574C851.783 28.521 852.033 27.607 850.035 27.168C848.134 27.549 844.428 27.553 843.331 28.104C840.333 27.95 839.075 27.434 836.619 27.168C836.705 27.575 836.371 27.896 835.501 28.104L837.177 28.378L833.823 28.456L833.27 28.104C831.842 26.992 828.203 25.647 824.325 25.762C822.506 24.994 824.575 24.867 824.325 23.888C820.063 23.414 821.723 23.071 818.731 22.249C813.173 23.237 810.969 21.523 805.314 22.484C804.066 21.728 799.584 21.653 800.839 20.376C796.427 21.106 788.96 20.811 784.066 20.376C783.77 21.639 779.742 22.124 777.358 22.951L779.038 23.226L778.476 23.655C780.074 23.712 780.362 24.042 781.83 24.123C780.742 24.9 779.624 23.862 778.476 23.889L777.358 23.772L776.237 23.655C776.055 23.926 774.475 23.907 772.883 23.889C772.883 23.812 772.883 23.733 772.883 23.655L771.209 23.772L769.532 23.655C758.064 24.905 753.553 21.222 747.17 19.907L746.049 19.79C745.926 19.634 745.799 19.478 745.488 19.322L747.17 19.439C747.788 18.788 751.494 18.783 753.878 18.501C754.506 17.434 751.897 17.044 752.761 15.925C746.638 16.036 743.538 15.515 739.348 15.223C740.014 15.832 738.896 16.065 735.988 15.925L734.312 16.044C734.312 16.044 732.634 15.925 733.75 16.393C733.652 16.695 727.085 16.408 732.634 15.925L733.942 15.574L735.988 15.691C735.988 15.458 735.988 15.223 735.988 14.989C731.515 14.742 728.326 14.301 724.811 14.989L725.365 15.34C723.122 15.24 721.161 15.127 719.251 14.864C718.467 14.954 717.216 15.072 716.396 15.305C716.284 15.534 716.396 15.718 716.423 16.043C716.777 16.313 717.796 16.424 718.787 16.539L720.892 16.979L719.215 16.862C719.153 17.005 719.052 17.139 718.099 17.095L718.657 17.445L719.216 17.799C719.572 18.342 719.034 18.696 718.1 18.967C714.822 18.771 718.768 18.214 718.1 17.799L716.424 17.525L716.984 17.096C715.442 17.106 714.526 16.986 713.628 16.863C713.624 16.629 714.532 16.584 714.745 16.393L713.066 16.276L713.628 15.925C713.084 15.648 712.435 15.395 711.391 15.223L710.83 15.575L709.156 15.458C703.151 16.486 698.657 15.216 693.499 15.458C692.835 16.957 691.332 18.283 683.436 18.267C675.373 16.673 687.385 13.998 690.144 12.413C694.716 12.559 690.785 13.391 694.62 13.351C698.49 12.643 693.549 12.366 701.329 12.648C705.582 11.616 699.575 10.82 703.566 10.305C697.218 10.982 699.05 9.416 696.852 8.667C695.298 8.135 691.499 7.992 690.143 7.261C689.075 6.679 689.716 6.468 689.025 5.854C684.028 5.48 677.426 6.104 678.964 7.027C668.849 7.067 672.352 8.603 671.136 10.304C667.363 10.841 657.21 10.042 657.718 11.475L659.4 11.358L658.837 11.709C659.151 12.19 661.826 12.177 663.307 12.412L664.614 12.06C665.007 12.228 665.28 12.392 665.882 12.575L664.425 12.881C665.187 13.735 665.989 14.584 665.546 15.691C655.025 16.319 647.242 14.596 647.656 12.177C649.138 11.944 651.818 11.957 652.13 11.475C649.79 11.34 648.933 10.895 645.421 11.007C645.07 11.323 643.828 11.453 644.303 11.944C643.355 12.981 638.959 12.935 640.948 14.051C633.751 13.745 642.198 15.357 636.474 15.457C633.788 14.457 631.109 13.457 629.769 12.177C625.91 11.191 617.407 11.177 614.115 10.071C614.266 6.431 609.902 3.085 596.221 1.873C596.302 1.078 596.571 0.239 593.984 0C593.817 0.581 590.202 0.068 589.51 0C595.14 1.873 586.645 4.038 589.51 5.854C589.975 5.455 590.956 5.904 592.865 5.854C592.555 5.244 592.493 4.683 596.22 4.918C596.011 5.811 592.218 5.952 591.747 6.791C593.833 6.824 595.49 6.946 596.22 7.26C596.762 8.623 592.47 8.972 590.627 9.836C592.219 10.284 594.082 10.674 596.22 11.007C594.492 11.348 595.236 12.205 595.105 12.881C600.063 13.48 600.056 15.122 605.166 15.691C608.65 15.39 602.358 14.376 607.405 14.285C613.297 14.433 610.502 15.009 610.757 16.159C619.606 16.96 620.542 19.42 628.65 20.375C626.584 22.362 627.739 25.025 618.584 25.527C616.785 24.185 610.873 23.708 611.877 21.78C609.853 21.475 606.231 21.99 602.934 21.547C602.077 22.225 601.159 22.891 598.457 23.185C590.728 22.744 587.635 20.185 588.392 18.734C586.698 18.077 581.147 18.224 579.449 17.564C582.213 17.235 581.422 16.757 580.57 16.158C575.256 16.067 572.504 16.655 568.27 16.158C568.435 16.739 567.691 17.129 566.03 17.329C565.739 16.998 563.58 17.061 562.677 16.861C559.652 17.289 562.483 17.654 560.443 18.031C557.503 18.102 559.56 17.122 555.969 17.329C553.67 17.393 554.921 18.202 552.616 18.265C544.781 18.654 543.555 20.428 532.489 20.139C529.786 19.066 526.055 18.21 519.074 18.032C516.578 19.852 508.559 20.514 503.421 21.78C493.283 22.029 493.311 20.148 484.406 20.139L484.966 20.491L483.291 20.609C483.291 20.998 483.291 21.39 483.291 21.78C479.263 22.004 481.306 20.77 482.172 20.609L481.613 20.257L483.29 20.139C478.795 19.579 479.217 18.47 476.58 18.032C475.847 19.05 465.335 18.02 465.398 19.204C460.368 18.274 452.579 19.237 448.626 19.905C446.067 19.661 444.669 19.174 440.804 19.204C435.933 20.363 441.923 22.313 435.209 22.715C433.774 22.801 423.744 20.748 427.385 19.905C424.113 19.576 421.889 20.174 419.556 19.437C420.703 17.287 421.586 16.718 418.438 14.518C414.593 14.621 412.17 14.425 409.495 14.284C409.321 14.56 409.682 14.95 408.375 14.988C403.904 14.142 399.851 15.378 394.958 15.221C394.515 14.818 396.618 14.621 394.958 14.518C390.926 14.611 390.01 15.356 387.133 15.689L386.569 16.042L384.892 15.923C383.633 18.498 368.708 16.101 371.474 14.987C363.024 15.193 357.311 12.802 350.228 11.942C349.879 11.625 348.642 11.495 349.112 11.005C342.19 10.894 340.738 9.637 332.342 9.834C328.333 9.19 328.225 7.73 324.513 7.024C321.354 6.83 321.618 7.354 318.924 7.258C319.244 6.364 313.787 6.292 311.097 6.086C306.145 5.71 305.292 4.921 303.27 4.916C302.106 4.914 299.613 6.352 298.795 5.15L297.12 5.032L298.795 4.916C297.494 4.486 295.874 4.124 294.324 3.744C293.486 5 289.145 4.818 290.972 6.322C287.709 6.575 286.76 7.313 282.021 7.259C277.625 7.01 277.546 5.855 276.43 4.917C271.246 4.987 266.755 4.915 264.132 4.449C263.592 4.726 262.942 4.979 261.896 5.151C260.446 3.942 255.363 5.522 252.95 5.619C252.162 4.224 245.848 3.985 246.244 2.341C237.099 1.837 232.343 1.446 223.882 1.637C220.293 3.022 206.382 2.719 199.28 2.106C198.579 3.2 190.297 3.061 188.103 2.575C187.764 3.035 189.61 3.04 190.337 3.277C187.764 4.606 188.935 7.307 184.745 8.899C186.791 9.795 190.515 10.344 192.575 11.241C187.964 13.422 199.937 14.037 202.638 15.457C198.507 16.698 196.003 18.282 189.218 18.968C189.567 20.215 186.98 20.843 181.395 20.843C177.816 23.217 166.079 23.882 156.793 25.058C155.089 27.211 162.181 27.522 166.853 28.339C165.265 28.941 164.238 29.661 160.147 29.743C152.388 27.253 137.125 26.086 138.903 22.248C143.385 22.016 144.578 21.094 145.613 20.14C139.82 19.402 138.85 17.654 136.666 16.159C138.303 15.956 140.21 15.809 140.018 15.222C138.537 14.03 131.257 14.536 127.721 14.284C128.853 15.546 121.49 16.19 115.423 16.628C118.126 16.919 119.039 17.587 119.894 18.266C116.246 21.154 97.868 22.004 99.768 25.293C100.098 25.908 95.432 25.478 96.414 26.23C99.38 28.235 109.135 26.709 116.538 26.462C118.149 26.593 119.271 26.828 119.894 27.166C117.536 28.624 114.616 29.963 108.713 30.678C105.309 30.69 104.363 30.184 102.003 29.976C97.656 31.173 98.706 33.501 91.941 34.191C76.148 34.083 65.189 33.028 52.804 31.616C53.799 29.611 46.608 29.453 52.804 28.102C46.763 28.185 43.879 27.143 40.504 26.932C34.743 26.568 27.273 26.925 22.616 26.697C13.643 26.259 13.854 24.531 17.025 22.716C11.567 22.756 15.649 21.893 13.67 21.548C8.567 22.099 3.998 21.921 0 21.429V59L8.15 58.999Z"
        fill={fill}
      />
    </svg>
  );
};

export default UpShapedBorder;
